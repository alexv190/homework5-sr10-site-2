import { Component, OnInit } from '@angular/core';
import { StatService } from '../../stat.service';

@Component({
  selector: 'stat-handler',
  templateUrl: './stat-handler.component.html',
  styleUrls: ['./stat-handler.component.css']
})
export class StatHandlerComponent implements OnInit {

  constructor(private statService:StatService) { }

  ngOnInit(): void {
  }

}
