import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DoctorSpecializations } from './doctor-specializations.model';
import { Doctors } from './doctors.model';
import { Specializations } from './specializations.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorSpecializationsService {
  constructor(private objHttp:HttpClient) { }
  apiUrl:string="http://localhost:5001/api/DoctorSpecializations";
  docList:Doctors[];
  dsList:DoctorSpecializations[];
  dsData:DoctorSpecializations=new DoctorSpecializations();

  data:number=0;
  docSpecializationsList(code){
    this.objHttp.get(this.apiUrl+'/GetDoctorsBySpecialization'+code).toPromise().then((res)=>{
      this.docList=res as Doctors[]
    });
  }

  addDocSpecialization(){
    return this.objHttp.post(this.apiUrl+'/AddDoctorSpecialization',this.dsData);
  }
}
