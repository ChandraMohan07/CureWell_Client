import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DoctorSpecializations } from 'src/app/shared/doctor-specializations.model';
import { DoctorSpecializationsService } from 'src/app/shared/doctor-specializations.service';
import { DoctorsService } from 'src/app/shared/doctors.service';
import { Specializations } from 'src/app/shared/specializations.model';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent {

  constructor(public objService:DoctorsService,public serve:DoctorSpecializationsService){}
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
  addSpec:boolean=false;
  insertRecord(form:NgForm){
    this.objService.addDoctor().subscribe(res=>
      {
        this.resetForm(form);
        alert("Doctor Successfully Added!");
        if(confirm("Do you want to add Specialization to the doctor?")){
          this.addSpec=true;
        }
      },
      err=>{alert("Error "+err);
    })
  }
  
  insertSpec(form:NgForm){
    this.serve.addDocSpecialization().subscribe(res=>
      {
        this.resetForm(form);
        alert("Specialization Added!");
      },
      err=>{alert("Error "+err);
    })
  }
}
