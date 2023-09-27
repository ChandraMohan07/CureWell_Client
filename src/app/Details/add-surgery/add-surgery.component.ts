import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SurgeriesService } from 'src/app/shared/surgeries.service';

@Component({
  selector: 'app-add-surgery',
  templateUrl: './add-surgery.component.html',
  styleUrls: ['./add-surgery.component.css']
})
export class AddSurgeryComponent implements OnInit {
  constructor(public objService:SurgeriesService){}

  ngOnInit(){
    this.resetForm();
  }
  resetForm(form?:NgForm){
    form.form.reset();
  }
  
  insertRecord(form:NgForm){
    this.objService.addSurgery().subscribe(res=>
      {
        this.resetForm(form);
        alert("Doctor Successfully Added!");
      },
      err=>{alert("Error "+err);
    })
  }
}
