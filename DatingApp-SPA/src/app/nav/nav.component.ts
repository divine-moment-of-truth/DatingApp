import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(public authService: AuthService, private alertifyService: AlertifyService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      // console.log('Logged in successfully');
      this.alertifyService.success('Logged in successfully');
    }, error => {
      // console.log(error);
      this.alertifyService.error(error);
    });
  }

  loggedIn() {
    // const token = localStorage.getItem('token');
    // The following code means it will return false if token is empty, or true if token has a value
    // return !!token;

    return this.authService.loggedIn();

  }

  logout() {
    localStorage.removeItem('token');
    // console.log('Logged out!');
    this.alertifyService.message('Logged out!');
  }

}
