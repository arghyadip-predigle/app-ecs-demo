import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcsRoutingModule } from './ecs-routing.module';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { MaterialModule } from '../material/material.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PatientIdentificationComponent } from './pages/patient-identification/patient-identification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientAdditionalDetailsComponent } from './pages/patient-additional-details/patient-additional-details.component';




@NgModule({
  declarations: [
    WelcomeComponent,
    NavbarComponent,
    PatientIdentificationComponent,
    PatientAdditionalDetailsComponent
  ],
  imports: [
    CommonModule,
    EcsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule 
  ]
})
export class EcsModule { }
