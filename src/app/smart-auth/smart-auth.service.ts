///<reference path="../../../node_modules/@types/node/index.d.ts"/>
///<reference path="../../../node_modules/@types/fhir/index.d.ts"/>
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {AuthConfig} from 'angular-oauth2-oidc';
import {epicSmartAuthConfig} from './smart-config';
import {Observable, of, throwError} from 'rxjs';
import {SmartBundle} from './smart-bundle';
import {FhirEndpoint} from './fhir-endpoint';
import {ActivatedRoute} from '@angular/router';
import Patient = fhir.Patient;

@Injectable({
  providedIn: 'root'
})
export class SmartAuthService {
  private sub: any;
  sb: SmartBundle;
  config: AuthConfig;
  private code: string;
  private state: string;

  constructor(private http: HttpClient) {
    this.config = epicSmartAuthConfig;
    // this.state = Math.floor(Math.random() * 4294967296).toString();
    this.state = 'BA8AD8D1EA3E882943869118CD24F85CC7BCDE2488B23FFCCA5335B42D';

    console.log(sessionStorage[this.state]);
  }

  static getEndpointList(): Observable<FhirEndpoint[]> {
    const endpoints = <FhirEndpoint[]>require('./epic-endpoints.json');
    return of(endpoints);
  }

  login(endpoint: string): void {
    console.log('Attempting to connect to endpoint ' + endpoint);

    const _redirectUri = this.config.redirectUri;

    const _url = (
      this.config.loginUrl
      + '?response_type=code&client_id='
      + this.config.clientId
      + '&redirect_uri='
      + _redirectUri)
    ;

    console.log('auth window: ' + _url);

    const win = window.open(_url, '_blank', 'width=1100, height=600');
    const pollTimer = window.setInterval(
      function () {
        try {
          if (win.document.URL.indexOf(_redirectUri) !== -1) {
            window.clearInterval(pollTimer);
            win.opener.location.href = win.document.URL;
            win.close();
          }
        } catch (e) {
          console.log('error authenticating');
        }
      },
      800
    );
  }

  initialize(route: ActivatedRoute): Observable<SmartBundle> {
    if (this.sb) {
      return of(this.sb);
    }

    // Check to see if access token and patient ID are stored in session storage
    const ss = sessionStorage[this.state];
    if (ss !== undefined) {
      const ss_json = JSON.parse(sessionStorage[this.state]);
      if (ss_json && ss_json.accessToken && ss_json.patientId) {
        this.sb = new SmartBundle(ss_json.accessToken, ss_json.patientId);
        return of(this.sb);
      }
    }

    return new Observable<SmartBundle>((observer) => {
      // get the parameter map from the ActivatedRoute
      this.sub = route.queryParamMap.subscribe( paramMap => {
        console.log(paramMap);

        this.code = paramMap.get('code');

        console.log('Code from paramMap is: ' + this.code);

        const httpParams = new HttpParams()
              .set('code', this.code)
              .set('grant_type', 'authorization_code')
              .set('redirect_uri', this.config.redirectUri)
              .set('client_id', this.config.clientId);

        this.http.post(this.config.tokenEndpoint, httpParams).subscribe(
          result => {
            // console.log(result);

            this.sb = new SmartBundle(result['access_token'], result['patient']);

            console.log('AccessToken:' + this.sb.accessToken);
            console.log('Patient:' + this.sb.patientId);

            sessionStorage[this.state] = JSON.stringify({
              accessToken: this.sb.accessToken,
              patientId: this.sb.patientId
            });

            observer.next(this.sb);
          }
        );
      });
    });
  }

  getPatient(): Observable<Patient> {
    console.log('attempting to get patient: ');

    if (!this.sb) {
      // return Observable.throw('no access token');
      // return ErrorObservable.create('no access token');
      console.log('no access token');
      return throwError('no access token in smart-auth.service.ts');
    }

    return this.http.get<Patient>(
      this.config.issuer + '/Patient/' + this.sb.patientId, {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.sb.accessToken)
      }
    );
  }

  // private getUrlParameter(urlParams: any, sParam: string): string {
  //   if (isUndefined(urlParams[sParam])) {
  //     console.log('parameter ' + sParam + ' does not exist');
  //     return '';
  //   }
  //   return urlParams[sParam];
  // }
}


