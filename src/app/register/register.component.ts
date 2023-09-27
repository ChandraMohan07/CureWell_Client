import { Component } from '@angular/core';
import { LogService } from '../shared/log.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(public objService:LogService){}
  ngOnInit(){
    this.resetForm();
  }
  resetForm(form?:NgForm){
    if(form!=null){
      form.form.reset();
    }
    else{
      this.objService.userData={userName:'',userPassword:''};
    }
  }

  insertRecord(form:NgForm){
    this.objService.addUser().subscribe(res=>
      {
        this.resetForm(form);
        alert("User Successfully Added!");
      },
      err=>{alert("Error "+err);
    })
  }
}
