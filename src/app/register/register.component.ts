import { Component } from '@angular/core';
import { LogService } from '../shared/log.service';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(public objService:LogService,private router:Router){}
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

  redirectToLogin(){
    this.router.navigate(['/login']);
  }
}
