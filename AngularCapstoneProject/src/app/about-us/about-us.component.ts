import { Component } from '@angular/core';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  teamMembers = [
    {
      name: 'John Doe',
      position: 'CEO',
      photo: '../assets/m1.jpg'
    },
    {
      name: 'Jane Smith',
      position: 'CTO',
      photo: '../assets/m2.jpg'
    },
    // Add more team members here...
  ];

  values = [
    'Integrity',
    'Innovation',
    'Teamwork',
    'Secure website',
    'User Friendly website',
    'Easy to deliver Products',
    'Focus on Customer satisfaction and trust',
  ];
}
