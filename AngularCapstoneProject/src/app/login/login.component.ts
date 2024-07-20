import { AuthServiceService } from './../guardService/auth-service.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private authService: AuthServiceService, private router: Router) { }

  login(): void {
    this.authService.login(this.username, this.password)   
    this.error = 'Invalid username or password';
  }
}
