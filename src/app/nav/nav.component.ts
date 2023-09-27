import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as alertify from 'alertifyjs';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(private jwtHelper: JwtHelperService,private router: Router) { }

  logo='assets/images/logo.jfif';
  logOut = () => {
    alertify.confirm("Are sure U want to Logout",()=>{
      localStorage.removeItem("jwt");
      this.router.navigate(['/']);
    },function(){})
  }
}