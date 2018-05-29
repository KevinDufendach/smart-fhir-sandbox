import { NgModule } from '@angular/core';
import {OAuthModule} from 'angular-oauth2-oidc';

@NgModule({
  imports: [
    OAuthModule.forRoot()
  ],
  declarations: []
})
export class AuthModule { }
