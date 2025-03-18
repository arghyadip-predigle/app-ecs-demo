import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-identification',
  templateUrl: './patient-identification.component.html',
  styleUrl: './patient-identification.component.scss'
})
export class PatientIdentificationComponent {
  isVerifyEnabled: Boolean = false;
  userForm : FormGroup
  fileUploadType : string[] = ["png", "svg", "jpg"]
  isVerifiedPatient: Boolean = false;
  
  constructor(
    private fb: FormBuilder,
    public router: Router
    ) {
    this.userForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]], 
      address: ['', [Validators.required]], 
      dob: ['', [Validators.required]],  
    });

    this.userForm.valueChanges.subscribe((formValues) => {
      // console.log(this.userForm.value);
      this.updateVerifyButtonState(formValues);
    });
  }

  // ngOnInit(): void {
  //     this.userForm.valueChanges.subscribe((formValues) => {
  //     this.updateVerifyButtonState(formValues);
  //   });
  // }

  private updateVerifyButtonState(formValues: any): void {
    const filledFields = Object.values(formValues).filter((value) =>
      value && String(value).trim().length > 0
    ).length;
    this.isVerifyEnabled = filledFields >= 3;
  }

  onFileSelected($event: Event) {
    throw new Error('Method not implemented.');
  }

  verify(){
    this.isVerifiedPatient = true;
    // this.router.navigate(['/patient-identification'])
  }

}
