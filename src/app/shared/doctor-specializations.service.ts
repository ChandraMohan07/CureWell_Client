import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DoctorSpecializations } from './doctor-specializations.model';
import { Doctors } from './doctors.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorSpecializationsService {
  constructor(private objHttp:HttpClient) { }
  apiUrl:string="http://localhost:5001/api/DoctorSpecializations/GetDoctorsBySpecialization";
  docList:Doctors[];

  data:number=0;
  docSpecializationsList(code){
    this.objHttp.get(this.apiUrl+'/'+code).toPromise().then((res)=>{
      this.docList=res as Doctors[]
    });
  }
}
