import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-additional-details',
  templateUrl: './patient-additional-details.component.html',
  styleUrl: './patient-additional-details.component.scss'
})
export class PatientAdditionalDetailsComponent {
  constructor (public router : Router){}


  goBack(){
    this.router.navigate(['/patient-identification']);
  }
}
