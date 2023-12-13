import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskReadComponent } from './components/task/task-read/task-read.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'tasks',
    component: TaskReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
