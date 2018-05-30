import { Component, OnInit } from '@angular/core';
import {FhirEndpoint} from './fhir-endpoint';
import {SmartAuthService} from './smart-auth.service';

@Component({
  selector: 'app-smart-auth',
  templateUrl: './smart-auth.component.html',
  styleUrls: ['./smart-auth.component.css']
})
export class SmartAuthComponent implements OnInit {
  endpoints: FhirEndpoint[];
  selectedEndpoint: string;

  constructor( private smartAuthService: SmartAuthService ) {}

  ngOnInit() {
    this.smartAuthService.getEndpointList().subscribe( endpoints => {
      this.endpoints = endpoints;
      console.log(endpoints);
    });
  }

  connectToEndpoint(endpoint: string) {
    console.log('ready to connect to endpoint: ' + endpoint);
    this.smartAuthService.login(endpoint);
  }
}
