import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctors } from './doctors.model';


@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  constructor(private objHttp:HttpClient) { }
  readonly apiUrl='http://localhost:5001/api/Doctors';
  doctorList:Doctors[];
  doctorData:Doctors=new Doctors();

  addDoctor(){
    return this.objHttp.post(this.apiUrl+'/AddDoctor',this.doctorData);
  }
  updateDoctor(){
    return this.objHttp.put(this.apiUrl+'/UpdateDoctor',this.doctorData);
  }
  getDoctorList(){
    this.objHttp.get(this.apiUrl+'/GetAllDoctors').toPromise().then(res=>this.doctorList=res as Doctors[]);
  }
}
