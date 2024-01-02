import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  // registration.component.ts

constructor(private router: Router) {}

  users:any[]=[];
user:any={gender: 'male', // default gender
receiveNewsletter: false, // default newsletter subscription
country: '' // default country
};

genderOptions: string[] = ['male', 'female', 'other'];
countryOptions: string[] = ['USA', 'Canada', 'UK', 'Australia', 'Germany', 'France', 'Other'];


register(){
console.log("user registered is ",this.user);
}
}

