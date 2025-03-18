import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-patient-identification',
  templateUrl: './patient-identification.component.html',
  styleUrl: './patient-identification.component.scss'
})
export class PatientIdentificationComponent {
onFileSelected($event: Event) {
throw new Error('Method not implemented.');
}

  userForm : FormGroup
  fileUploadType : string[] = ["png", "svg", "jpg"]
  
  constructor(private fb: FormBuilder) {

    this.userForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]], 
      location: ['', [Validators.required]], 
      dob: ['', [Validators.required]],  
    });
  }
}
