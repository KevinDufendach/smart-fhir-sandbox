import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestAuthComponent} from './test-auth/test-auth.component';

const routes: Routes = [
  { path: 'index.html', component: TestAuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
