import { Component,OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { DoctorsService } from 'src/app/shared/doctors.service';
import { NgForm } from '@angular/forms';
import { Doctors } from 'src/app/shared/doctors.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  constructor(public objService:DoctorsService,private router:Router){}
  dList:string;
  ngOnInit():void{
    this.objService.getDoctorList();
  }

  doctor:Doctors;

  clicked:boolean=false;
  
  edit(d){
    this.doctor=d;
    this.clicked=true;
    this.resetForm();
  }
  
  resetForm(form?:NgForm){
    if(form!=null){
      form.form.reset();
    }
    else{
      this.objService.doctorData={doctorId:this.doctor.doctorId,doctorName:''};
    }
  }

  currentPage:number=1;
  recordsPerPage:number=6;
  nextPage(){
    this.currentPage++;
  }

  prevPage(){
    this.currentPage--;
  }

  updateRecord(form:NgForm){
    this.objService.updateDoctor().subscribe(res=>
      {
        this.resetForm();
        this.objService.getDoctorList();
        alert("Data Successfully Updated!");
        this.clicked=false;
      },
      err=>{alert("Error "+err);
    })
  }
  GoBack(){
    this.clicked=false;
  }
}