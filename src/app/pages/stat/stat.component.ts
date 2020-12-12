import { Component, OnInit, ViewChild } from '@angular/core';
import { DomService } from '../../dom.service';
import { StatService } from '../../stat.service';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css'],
  providers: [StatService, DomService],
})
export class StatComponent implements OnInit {
  utm_source = Array<string>();
  utm_medium = Array<string>();
  utm_campaign = Array<string>();
  utm_content = Array<string>();
  utm_term = Array<string>();
  @ViewChild('visitedPages') visitedPages: any;
  activeFilters = new Array<string>();

  constructor(
    private statService: StatService,
    private domService: DomService
  ) {}

  ngOnInit(): void {
    this.utm_source = this.statService.getUtmValues('utm_source');
    this.utm_medium = this.statService.getUtmValues('utm_medium');
    this.utm_campaign = this.statService.getUtmValues('utm_campaign');
    this.utm_content = this.statService.getUtmValues('utm_content');
    this.utm_term = this.statService.getUtmValues('utm_term');
  }

  setFilter(utm: string, value: string) {
    console.log('clicked, ', utm, ' ', value);
    if (value.length == 0) {
     delete this.activeFilters[utm];
    } else {
      this.activeFilters[utm] = value;
    }
    this.domService.clearLinks(this.visitedPages);
    const links = this.statService.getFiltered(this.activeFilters);
    for (const url of links) {
      this.domService.displayLinks(url, this.visitedPages);
    }
  }
}
