import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ErrorComponent } from './pages/error/error.component';
import { MainComponent } from './pages/main/main.component';
import { MyProjectsComponent } from './pages/my-projects/my-projects.component';
import { ReviewComponent } from './pages/review/review.component';
import { StatComponent } from './pages/stat/stat.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainComponent
  },
  {
    path: 'about',
    component: AboutMeComponent
  },
  {
    path: 'projects',
    component: MyProjectsComponent
  },
  {
    path: 'stat',
    component: StatComponent
  },
  {
    path: 'articles',
    component: ArticlesComponent
  },
  {
    path: 'review',
    component: ReviewComponent
  }
  ,
  {
    path: '404',
    component: ErrorComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
