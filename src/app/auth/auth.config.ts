import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

  // Url of the Identity Provider
  // issuer: 'https://open-ic.epic.com/Argonaut/oauth2/authorize',
  // issuer: 'https://open-ic.epic.com/argonaut/api/FHIR/Argonaut/',

  // Login-Url
  loginUrl: 'https://open-ic.epic.com/Argonaut/oauth2/authorize',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/landing',

  // The SPA's id. The SPA is registered with this id at the auth-server
  clientId: 'a0d973e2-baed-4808-ab27-03df890a33ce',

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: 'patient/*.read launch',

  /**
   * Defines whether to request a access token during
   * implicit flow.
   */
  requestAccessToken: true,

  /**
   * Url of the token endpoint as defined by OpenId Connect and OAuth 2.
   */
  tokenEndpoint: 'https://open-ic.epic.com/Argonaut/oauth2/token',

  /**
   * Defines whether https is required.
   * The default value is remoteOnly which only allows
   * http for localhost, while every other domains need
   * to be used with https.
   */
  requireHttps: 'remoteOnly',
};

export const demoAuthConfig: AuthConfig = {

  // Url of the Identity Provider
  issuer: 'https://steyer-identity-server.azurewebsites.net/identity',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/index.html',

  // The SPA's id. The SPA is registerd with this id at the auth-server
  clientId: 'spa-demo',

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: 'openid profile email voucher',
};
