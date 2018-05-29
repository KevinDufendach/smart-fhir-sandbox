import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestAuthComponent} from './test-auth/test-auth.component';

const routes = [
  {path: 'index.html', component: TestAuthComponent},
  {path: 'landing', component: TestAuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
