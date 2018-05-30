import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SmartAuthService} from '../smart-auth/smart-auth.service';
import Patient = fhir.Patient;

@Component({
  selector: 'app-smart-landing',
  templateUrl: './smart-landing.component.html',
  styleUrls: ['./smart-landing.component.css']
})
export class SmartLandingComponent implements OnInit {
  ptName = 'Patient name not yet retrieved';
  ptFhir: Patient;

  constructor( private route: ActivatedRoute, public smartService: SmartAuthService) { }

  ngOnInit() {
    this.smartService.initialize(this.route).subscribe(sb => {
      // this.getPatientName();
    });
  }

  getPatientName() {
    this.smartService.getPatient().subscribe(patient => {
      this.ptFhir = patient;
      this.ptName = this.ptFhir.name[0].given + ' ' + this.ptFhir.name[0].family;
    });
  }
}
