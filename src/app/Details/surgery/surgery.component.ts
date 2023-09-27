import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SpecializationsService } from 'src/app/shared/specializations.service';
import { Surgeries } from 'src/app/shared/surgeries.model';
import { SurgeriesService } from 'src/app/shared/surgeries.service';

@Component({
  selector: 'app-surgery',
  templateUrl: './surgery.component.html',
  styleUrls: ['./surgery.component.css']
})
export class SurgeryComponent {

  constructor(public objService:SurgeriesService){}
  ngOnInit(){
    this.objService.surgeryList();
  }
  
  surgery:Surgeries;
  clicked:boolean=false;
  edit(sur){
    this.surgery=sur;
    this.clicked=true;
    console.log(this.objService.surgeriesList);
    this.resetForm();
  }

  currentPage:number=1;
  recordsPerPage:number=6;
  nextPage(){
    this.currentPage++;
  }

  prevPage(){
    this.currentPage--;
  }
  
  resetForm(form?:NgForm){
    if(form!=null){
      form.form.reset();
    }
    else{
      this.objService.surgeryData={surgeryId:this.surgery.surgeryId,doctorId:this.surgery.doctorId,surgeryDate:this.surgery.surgeryDate,
        startTime:this.surgery.startTime,endTime:this.surgery.endTime,surgeryCategory:this.surgery.surgeryCategory};
    }
  }

  updateRecord(form:NgForm){
    this.objService.updateSurgery().subscribe(res=>
      {
        form.reset();
        this.objService.surgeryList();
        alert("Data Successfully Updated!");
      },
      err=>{alert("Error "+err);
    })
  }
  del(id){
    this.objService.deleteSurgery(id).subscribe(res=>
      {
        this.objService.surgeryList();
        alert("Surgery Removed!");
      },
      err=>{alert("Error "+err);
    })
  }
  GoBack(){
    this.clicked=false;
  }
}
