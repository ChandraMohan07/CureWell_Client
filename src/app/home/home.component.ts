import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import jwtDecode, { JwtDecodeOptions } from 'jwt-decode';
import { DoctorsService } from '../shared/doctors.service';
import { LogService } from '../shared/log.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private jwtHelper: JwtHelperService,private logService:LogService) { }

  showAlert=false;
  ngOnInit(): void {
    this.showAlert=true;
    setTimeout(() => {
      this.showAlert=false;
    }, 4000);
  }

  logo='assets/images/logo.jfif';
  
  isUserAuthenticated = (): boolean => {
    const token = localStorage.getItem("jwt");

    if (token && !this.jwtHelper.isTokenExpired(token)){
      return true;
    }

    return false;
  }

  decodedToken(){
    const token=localStorage.getItem("jwt");
    if(token){
      const tokenPayload=jwtDecode(token);
      const userName=tokenPayload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
      return userName;
    }
  }
  data:string=this.decodedToken();

  logOut = () => {
    localStorage.removeItem("jwt");
  }
}