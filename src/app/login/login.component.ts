import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AuthenticatedResponse } from './../_interfaces/authenticated-response.model';
import { LogDetail } from "../_interfaces/log-detail.model";
import { NgForm } from '@angular/forms';
import { LogService } from '../shared/log.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  invalidLogin: boolean;
  credentials: LogDetail = {UserName:'', UserPassword:''};

  constructor(private router: Router, private http: HttpClient,public logService:LogService) { }

  logo='assets/images/logo.jfif';
  ngOnInit(): void {
  }


  login = ( form: NgForm) => {
    if (form.valid) {
      this.http.post<AuthenticatedResponse>("http://localhost:5001/api/Auth/login", this.credentials, {
        headers: new HttpHeaders({ "Content-Type": "application/json"})
      })
      .subscribe({
        next: (response: AuthenticatedResponse) => {
          const token = response.token;
          localStorage.setItem("jwt", token); 
          alert("Login Successfull");
          this.invalidLogin = false; 
          this.router.navigate(["/"]);
        },
        error: (err: HttpErrorResponse) => this.invalidLogin = true
      })
    }
  }

  Register(){
    this.router.navigate(['/register']);
  }

}
