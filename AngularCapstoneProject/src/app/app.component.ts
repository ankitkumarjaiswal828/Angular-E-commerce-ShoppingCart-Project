import { Component } from '@angular/core';
import { AuthServiceService } from './guardService/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularCapstoneProject';
  constructor(public authService: AuthServiceService) { }

  logout(): void {
    this.authService.logout();
  }
}

