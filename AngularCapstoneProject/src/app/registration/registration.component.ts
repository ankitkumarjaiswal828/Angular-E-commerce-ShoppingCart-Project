import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../guardService/auth-service.service'
import { User } from '../product-details/product.model'; 

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  user: User = { name:',',username: '', password: '' };
  errorMessage: string = '';

  constructor(private authService: AuthServiceService, private router: Router) { }

  register() {
    if (this.authService['register'](this.user)) {
      this.router.navigate(['/prodetails']);
    } else {
      this.errorMessage = 'Registration failed';
    }
  }
}
