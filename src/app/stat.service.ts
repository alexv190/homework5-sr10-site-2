import { Injectable } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class StatService {
  private utms = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_content',
    'utm_term',
  ];
  private utm_values =new Object();// new Array<Array<string>>();

  //тип utm-метки -> значение метки -> индексы посещенных страниц, где есть эта места с этим значением
  private utm_links = new Object();//new Array<Array<Array<number>>>(); //массив utm-параметров, каждый из которых ссылкается на массив индексов посещенных страниц из visitedQueryUrls
  private visitedQueryUrls = new Array<string>(); //список всех посещенных комбинаций после знака ? в url

  constructor(private activeRoute: ActivatedRoute) {
    this.loadStats();
    this.getParam();
  }

  ngOnInit(): void {}

  getUtmValues(utm_key: string): string[] {
    return this.utm_values[utm_key];
  }

  getFiltered(utmArray:Array<string>):Array<string> {
    const result = new Array<string>();
    let filteredLinks = new Array<number>();
    for (const utm in utmArray) {
      const utmValue = utmArray[utm]
      this.prepareArray(this.utm_links, utm, new Object());
      this.prepareArray(this.utm_links[utm], utm, []);
      const linkIndexes = this.utm_links[utm][utmValue];
      if (filteredLinks.length == 0)
        filteredLinks = linkIndexes
      else {
        filteredLinks = this.arraysInteresction(filteredLinks, linkIndexes)
      }
    }
    for (let index of filteredLinks) {
      result.push(this.visitedQueryUrls[index]);
    }
    return result;
  }

  private arraysInteresction(array1:Array<any>, array2:Array<any>) {
    return array1.filter(value => array2.includes(value))
  }

  private getParam() {
    this.activeRoute.queryParams.subscribe((e) => {
      if (Object.keys(e).length === 0) {
        return;
      }
      console.log('ANALYZING PARAMS: stat params: ', e);
      const queryUrl = window.location.search;
      let visitedQueryUrlIndex = this.visitedQueryUrls.indexOf(queryUrl);
      if (visitedQueryUrlIndex == -1) {
        visitedQueryUrlIndex = this.visitedQueryUrls.length;
        this.visitedQueryUrls.push(queryUrl);
      }
      this.parseUtm(e, visitedQueryUrlIndex);
    });
  }

  private parseUtm(params: Params, visitedQueryUrlIndex: number) {
    for (const param in params) {
      if (this.utms.indexOf(param) > -1) {
        const paramValue =  params[param];
        console.log('found utm:', param, ' ', paramValue);
        this.prepareArray(this.utm_links, param, new Object());
        this.prepareArray(this.utm_links[param], paramValue, []);
        if (this.utm_links[param][paramValue].indexOf(visitedQueryUrlIndex) == -1) {
          this.utm_links[param][paramValue].push(visitedQueryUrlIndex);
        }
        //сохраняем новый value utm-параметра, если ранее его не было
        this.prepareArray(this.utm_values, param, []);
        if (this.utm_values[param].indexOf(paramValue) == -1) {
          this.utm_values[param].push(paramValue);
        }
      }
    }
    this.saveStats();
  }



  private prepareArray(array:Object, key:string, initVal:any) {
    if (
      array[key] == undefined ||
      array[key] == null
    ) {
      array[key] = initVal;
    }
  }

  private loadStats() {
    //from localstorage
    this.utm_values = this.loadFromLocalStorage('values');
    this.utm_links = this.loadFromLocalStorage('statLinks');
    this.visitedQueryUrls = this.loadFromLocalStorage('visitedQueryUrls', true);
  }

  private loadFromLocalStorage(name: string, isArray = false): any {
    let cachedStats = JSON.parse(localStorage.getItem(name));
    if (cachedStats == null || cachedStats == undefined) {
      if (isArray) {
        cachedStats = []
      } else {
        cachedStats = new Object();
      }
    }
    console.log('loaded: ', name, ' = ', cachedStats);
    return cachedStats;
  }

  private saveToLocalStorage(name: string, obj: any) {
    localStorage.setItem(name, JSON.stringify(obj));
  }

  private saveStats() {
    //to localstorage
    this.saveToLocalStorage('values', this.utm_values);
    this.saveToLocalStorage('statLinks', this.utm_links);
    this.saveToLocalStorage('visitedQueryUrls', this.visitedQueryUrls);
  }
}
