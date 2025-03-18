import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {
  checkbox1 : boolean = false;
  checkbox2: boolean = false;
  isButtonEnabled: boolean = false;

  constructor(private router:Router){}
  search(event: Event): void {
    const input = (event.target as HTMLInputElement).value;
    if (input) {
      console.log('Search query:', input); // Replace with your search logic
      alert(`Searching for: ${input}`);
    }
  }

  redirectTo(): void {
    this.router.navigate(['/patient-identification']);
  }

  updateButtonState(){
    this.isButtonEnabled = this.checkbox1 && this.checkbox2;
  }
  
}
