import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {
  [x: string]: any;

  isAuthentiacted: boolean = false;

  DBUsers = [
    { "username": "admin@gmail.com", "password": "admin" },
    { "username": "raj", "password": "raj" }
  ]

  constructor(private router: Router) { }

  login(inpuser: string, inpass: string): void {

    if (this.DBUsers.find(user => user.username == inpuser && user.password == inpass)) {

      this.isAuthentiacted = true;
      this.router.navigate(['/prodetails'])
      // this.router.navigate(['/home'])

    }
    else {
      this.isAuthentiacted = false;
      this.router.navigate(['/login'])
    }
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthentiacted
  }

  logout(): void {
    this.isAuthentiacted = false;
    this.router.navigate(['/login'])
  }

}
