import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DoctorsComponent } from './Details/doctors/doctors.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';
import { HttpClientModule, HttpRequest } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { SurgeryComponent } from './Details/surgery/surgery.component';
import { SpecializationComponent } from './Details/specialization/specialization.component';
import { AddDoctorComponent } from './Details/add-doctor/add-doctor.component';
import { AddSurgeryComponent } from './Details/add-surgery/add-surgery.component';
import { AddSpecializationComponent } from './Details/add-specialization/add-specialization.component';
import { RegisterComponent } from './register/register.component';



export function tokenGetter() { 
  return localStorage.getItem("jwt"); 
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DoctorsComponent,
    HomeComponent,
    NavComponent,
    SurgeryComponent,
    SpecializationComponent,
    AddDoctorComponent,
    AddSurgeryComponent,
    AddSpecializationComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:5001"],
        disallowedRoutes: []
      }
    })
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
