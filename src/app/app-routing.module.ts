import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ErrorComponent } from './pages/error/error.component';
import { MainComponent } from './pages/main/main.component';
import { MyProjectsComponent } from './pages/my-projects/my-projects.component';
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
