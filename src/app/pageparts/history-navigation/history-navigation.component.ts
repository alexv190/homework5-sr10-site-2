import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HistoryNavigationService } from './history-navigation.service';

@Component({
  selector: 'history-navigation',
  templateUrl: './history-navigation.component.html',
  styleUrls: ['./history-navigation.component.css'],
})
export class HistoryNavigationComponent implements OnInit {
  constructor(private historyNavigationService: HistoryNavigationService) {

  }

  ngOnInit(): void {
   
  }

  goBack() {
    this.historyNavigationService.back();
  }

  goForward() {
    this.historyNavigationService.forward();
  }
}
