import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Surgeries } from './surgeries.model';

@Injectable({
  providedIn: 'root'
})
export class SurgeriesService {

  constructor(private objHttp:HttpClient) { }
  readonly apiUrl='http://localhost:5001/api/Surgeries';
  surgeriesList:Surgeries[];
  surgeryData:Surgeries=new Surgeries();

  addSurgery(){
    return this.objHttp.post(this.apiUrl+'/AddSurgery',this.surgeryData);
  }
  deleteSurgery(id){
    return this.objHttp.delete(this.apiUrl+'/DeleteSurgery'+'/'+id);
  }
  updateSurgery(){
    return this.objHttp.put(this.apiUrl+'/UpdateSurgery',this.surgeryData);
  }
  surgeryList(){
    this.objHttp.get(this.apiUrl+'/GetAllSurgeryTypeForToday').toPromise().then(res=>this.surgeriesList=res as Surgeries[]);
  }
}