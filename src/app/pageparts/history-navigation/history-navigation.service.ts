import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HistoryNavigationService {
  private history = new Array<string>();
  private openedPagePointer = -1;
  private navigatingInHistory= false;

  constructor(public router: Router) {
    //как получить историю
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(async ({ urlAfterRedirects }: NavigationEnd) => {
        console.log(urlAfterRedirects);
        this.pageOpened(urlAfterRedirects);
      });
  }

  pageOpened(url: string) {
    if (url == null) {
      return;
    }
    if (this.navigatingInHistory) {
      this.navigatingInHistory = false;
    } else {
 
    if (this.openedPagePointer >= 0 && this.history.length > this.openedPagePointer) {
      this.history = this.history.slice(0, this.openedPagePointer+1);
    }
    this.openedPagePointer++;
    this.history.push(url);
    }
    
  }

  back() {
    if (this.openedPagePointer == 0) {
      return;
    }
    this.navigatingInHistory = true;
    this.openedPagePointer--;
    const openUrl = this.history[this.openedPagePointer];
    this.open(openUrl);
  }

  forward() {
    if (this.openedPagePointer == this.history.length-1) {
      return;
    }
    this.navigatingInHistory = true;
    this.openedPagePointer++;
    const openUrl = this.history[this.openedPagePointer];
    this.open(openUrl);
  }

  private open(url:string) {
    this.router.navigateByUrl(url);
  }
}
