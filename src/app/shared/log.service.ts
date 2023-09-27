import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';
import { Register } from './register.model';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private objHttp:HttpClient) { }
  readonly apiUrl='http://localhost:5001/api/LogDetails';
  userList:Register[];
  userData:Register=new Register();

  addUser(){
    return this.objHttp.post(this.apiUrl,this.userData);
  }
}