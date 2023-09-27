import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsComponent } from './Details/doctors/doctors.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SurgeryComponent } from './Details/surgery/surgery.component';
import { SpecializationComponent } from './Details/specialization/specialization.component';
import { AddDoctorComponent } from './Details/add-doctor/add-doctor.component';
import { AddSurgeryComponent } from './Details/add-surgery/add-surgery.component';
import { AddSpecializationComponent } from './Details/add-specialization/add-specialization.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register',component: RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'userAdd',component:RegisterComponent},
  {path:'doctor',component: DoctorsComponent, canActivate: [AuthGuard]},
  {path:'surgery',component: SurgeryComponent, canActivate: [AuthGuard]},
  {path:'specialization',component: SpecializationComponent, canActivate: [AuthGuard]},
  {path:'doctorAdd',component:AddDoctorComponent,canActivate: [AuthGuard]},
  {path:'surgeryAdd',component:AddSurgeryComponent,canActivate: [AuthGuard]},
  {path:'specializationAdd',component:AddSpecializationComponent,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
