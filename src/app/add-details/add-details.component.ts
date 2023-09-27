import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css']
})
export class AddDetailsComponent {

  constructor(private router:Router){}
  gotoDoctor(){
    this.router.navigate(['/doctorAdd']);
  }
  gotoSurgery(){
    this.router.navigate(['/surgeryAdd']);
  }
  gotoSpec(){
    this.router.navigate(['/specializationAdd']);
  }
}
