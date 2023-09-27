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

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'doctor',component: DoctorsComponent, canActivate: [AuthGuard]},
  {path:'surgery',component: SurgeryComponent, canActivate: [AuthGuard]},
  {path:'specialization',component: SpecializationComponent, canActivate: [AuthGuard]},
  {path:'doctorAdd',component:AddDoctorComponent,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
