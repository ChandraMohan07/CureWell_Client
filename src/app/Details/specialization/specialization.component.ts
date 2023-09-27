import { Component } from '@angular/core';
import { DoctorSpecializationsService } from 'src/app/shared/doctor-specializations.service';
import { Specializations } from 'src/app/shared/specializations.model';
import { SpecializationsService } from 'src/app/shared/specializations.service';
import { Surgeries } from 'src/app/shared/surgeries.model';

@Component({
  selector: 'app-specialization',
  templateUrl: './specialization.component.html',
  styleUrls: ['./specialization.component.css']
})
export class SpecializationComponent {
  
  constructor(public specService:SpecializationsService,public docSpecService:DoctorSpecializationsService){}

  ngOnInit(){
    this.specService.specializationsList();
  }

  currentPage:number=1;
  recordsPerPage:number=6;
  nextPage(){
    this.currentPage++;
  }

  prevPage(){
    this.currentPage--;
  }
  specilaization:Specializations;
  clicked:boolean=false;
  docClick(spec){
    this.specilaization=spec;
    this.clicked=true;
    this.docSpecService.docSpecializationsList(spec.specializationCode);
  }
}