import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // oauthService: OAuthService;

  constructor() {
    this.configureWithNewConfigApi();
  }

  private configureWithNewConfigApi() {
    // this.oauthService.configure(authConfig);
    // this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    // this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
}
