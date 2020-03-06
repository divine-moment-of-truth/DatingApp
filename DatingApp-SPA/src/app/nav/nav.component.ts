import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log('Logged in successfully');
    }, error => {
      console.log('Failed to login - ' + error.text);
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');

    // The following code means it will return false if token is empty, or true if token has a value
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    console.log('Logged out!');
  }

}