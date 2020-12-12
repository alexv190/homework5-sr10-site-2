import { Component, OnInit } from '@angular/core';

class Project {
  constructor(public name: string, public description: string, public link:string) {}
}

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css'],
})
export class MyProjectsComponent implements OnInit {

  projects:Project[]

  constructor() {}

  ngOnInit(): void {
    this.projects = new Array<Project>();
    this.projects.push(new Project(
      'Игра "Быки и коровы"', 'Увлекательная пошаговая логическая игра, в которой вам предстоит сразиться с компьютером', 'https://stackblitz.com/github/alexv190/homework3-sr5-task6'
    ));
    this.projects.push(new Project(
      'Приложение "Журнал оценок"', 'Учебное приложение с примером использования localStorage', 'https://stackblitz.com/github/alexv190/homework-sr4-task56'
    ));
    this.projects.push(new Project(
      'Тестовые проекты Angular', 'Проект с реализованной директивой, аналогичной *ngIf', 'https://stackblitz.com/github/alexv190/homework-sr4-task7'
    ));
  }
}
