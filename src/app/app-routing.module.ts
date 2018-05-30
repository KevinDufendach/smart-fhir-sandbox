import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {TestAuthComponent} from './test-auth/test-auth.component';
import {SmartAuthComponent} from './smart-auth/smart-auth.component';
import {SmartLandingComponent} from './smart-landing/smart-landing.component';

const routes = [
  {path: 'index.html', component: TestAuthComponent},
  {path: 'login', component: SmartAuthComponent},
  {path: 'launch', component: SmartAuthComponent},
  {path: 'landing', component: SmartLandingComponent},
  {path: '', redirectTo: '/launch', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
