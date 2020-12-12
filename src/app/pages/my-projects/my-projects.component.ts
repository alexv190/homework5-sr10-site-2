import { Component, OnInit } from '@angular/core';

class Project {
  constructor(
    public name: string,
    public description: string,
    public link: string,
    public readmelink: string
  ) {}
}

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css'],
})
export class MyProjectsComponent implements OnInit {
  projects: Project[];

  constructor() {}

  ngOnInit(): void {
    this.projects = new Array<Project>();
    this.addProject(
      'Учебный проект',
      'Задание - добавить 10 компонентов angular',
      'https://stackblitz.com/github/alexv190/homework1-sr2-task10'
    );
    this.addProject(
      'Учебный проект',
      'Задание - добавить стили',
      'https://stackblitz.com/github/alexv190/homework1-sr2-task11'
    );
    this.addProject(
      'Шахматная доска',
      '',
      'https://stackblitz.com/github/alexv190/homework1-sr2-task12'
    );
    this.addProject(
      'Учебный проект',
      'Пример с вложенными модулями',
      'https://stackblitz.com/github/alexv190/homework1-sr2-task15'
    );
    this.addProject(
      'Директива кэша с подсказками',
      '',
      'https://stackblitz.com/github/alexv190/homework-sr3-task7'
    );
    this.addProject(
      'Директива для кнопки, разрешающая нажатие',
      '',
      'https://stackblitz.com/github/alexv190/homework-sr3-task8'
    );
    this.addProject(
      'Директива переброса каретки в поле',
      '',
      'https://stackblitz.com/github/alexv190/homework-sr3-task9'
    );
    this.addProject(
      'Приложение "Журнал оценок"',
      'Учебное приложение с примером использования localStorage',
      'https://stackblitz.com/github/alexv190/homework-sr4-task56'
    );
    this.addProject(
      'Учебный проект',
      'Проект с реализованной директивой, аналогичной *ngIf',
      'https://stackblitz.com/github/alexv190/homework-sr4-task7'
    );
    this.addProject(
      'Игра "Быки и коровы"',
      'Увлекательная пошаговая логическая игра, в которой вам предстоит сразиться с компьютером',
      'https://stackblitz.com/github/alexv190/homework3-sr5-task6'
    );
    this.addProject(
      'Приложение с подсчетом аналитики посещений',
      '',
      'https://stackblitz.com/github/alexv190/homework3-sr6-site'
    );
    this.addProject(
      'Приложение "Журнал оценок"',
      'Добавлена валидация и формы',
      'https://stackblitz.com/github/alexv190/homework4-sr7-site'
    );
    this.addProject(
      'Использование HttpClient & Interceptor',
      '',
      'https://stackblitz.com/github/alexv190/homework5-sr10-site'
    );
    this.addProject(
      'Сайт-визитка',
      '',
      'https://stackblitz.com/github/alexv190/homework5-sr10-site-2'
    );
  }

  private addProject(title: string, desc: string, url: string) {
    const readmelink = url.replace('https://stackblitz.com/github' , 'https://github.com') + '/blob/main/README.md';
    this.projects.push(new Project(title, desc, url, readmelink));
  }
}
