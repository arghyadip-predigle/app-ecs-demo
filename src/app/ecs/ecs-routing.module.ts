import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { PatientIdentificationComponent } from './pages/patient-identification/patient-identification.component';
import { PatientAdditionalDetailsComponent } from './pages/patient-additional-details/patient-additional-details.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'patient-identification', component: PatientIdentificationComponent},
  { path: 'patient-additional-info', component: PatientAdditionalDetailsComponent},
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcsRoutingModule { }