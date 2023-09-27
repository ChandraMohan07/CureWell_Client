import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DoctorsService } from 'src/app/shared/doctors.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent {

  constructor(public objService:DoctorsService){}
  ngOnInit(){
    this.resetForm();
  }
  resetForm(form?:NgForm){
    if(form!=null){
      form.form.reset();
    }
    else{
      this.objService.doctorData={doctorId:0,doctorName:''};
    }
  }

  insertRecord(form:NgForm){
    this.objService.addDoctor().subscribe(res=>
      {
        this.resetForm(form);
        alert("Doctor Successfully Added!");
      },
      err=>{alert("Error "+err);
    })
  }
}
