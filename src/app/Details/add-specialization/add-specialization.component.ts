import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DoctorSpecializationsService } from 'src/app/shared/doctor-specializations.service';

@Component({
  selector: 'app-add-specialization',
  templateUrl: './add-specialization.component.html',
  styleUrls: ['./add-specialization.component.css']
})
export class AddSpecializationComponent {
  
  constructor(public objService:DoctorSpecializationsService){}
  ngOnInit(){
    this.resetForm();
  }
  resetForm(form?:NgForm){
    if(form!=null){
      form.form.reset();
    }
    else{
      this.objService.specData={specializationCode:'',specializationName:''};
    }
  }

  insertRecord(form:NgForm){
    this.objService.addSpecialization().subscribe(res=>
      {
        this.resetForm(form);
        alert("Specialization Successfully Added!");
      },
      err=>{alert("Error "+err);
    })
  }
}
