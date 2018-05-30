import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SmartAuthService} from '../smart-auth/smart-auth.service';
import Patient = fhir.Patient;
import Observation = fhir.Observation;

@Component({
  selector: 'app-smart-landing',
  templateUrl: './smart-landing.component.html',
  styleUrls: ['./smart-landing.component.css']
})
export class SmartLandingComponent implements OnInit {
  ptName = 'Patient name not yet retrieved';
  ptFhir: Patient;
  observationList: Observation[] = [];

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

  getObservations(code: string) {
    if (this.ptFhir !== undefined) {
      this.smartService.getObservations(code).subscribe(
        observation => {
          this.observationList.push(observation);
        }
      );
    }
  }
}
