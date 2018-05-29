import { Component } from '@angular/core';
import {OAuthService} from 'angular-oauth2-oidc';

@Component({
  selector: 'app-test-auth',
  templateUrl: './test-auth.component.html',
  styleUrls: ['./test-auth.component.css']
})
export class TestAuthComponent {

  constructor(private oauthService: OAuthService) {
    // Use setStorage to use sessionStorage or another implementation of the TS-type Storage
    // instead of localStorage
    // this.oauthService.setStorage(sessionStorage);

    // To also enable single-sign-out set the url for your auth-server's logout-endpoint here
    // this.oauthService.logoutUrl = "https://steyer-identity-server.azurewebsites.net/identity/connect/endsession";

    // This method just tries to parse the token(s) within the url when
    // the auth-server redirects the user back to the web-app
    // It doesn't send the user the the login page
    // this.oauthService.tryLogin();
  }

  public login() {
    this.oauthService.initImplicitFlow();
  }

  public logoff() {
    this.oauthService.logOut();
  }

  public get name() {
    const claims = this.oauthService.getIdentityClaims();
    if (!claims) {
      return null;
    }

    try {
      return claims['given_name'];
    } catch (e) {
      return;
    }
  }
}
