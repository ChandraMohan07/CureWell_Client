import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Specializations } from './specializations.model';

@Injectable({
  providedIn: 'root'
})
export class SpecializationsService {

  constructor(private objHttp:HttpClient) { }
  apiUrl:string="http://localhost:5001/api/Specializations/GetAllSpecializations";
  specList:Specializations[];

  specializationsList(){
    this.objHttp.get(this.apiUrl).toPromise().then(res=>this.specList=res as Specializations[]);
  }

}
