import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { AuthModule } from './module/authmodule';
import { DashboardModule } from './module/dashboardmodule';
import { LoginComponent } from './components/auth/login/login.component';
import { ForgetPasswordComponent } from './components/auth/forget-password/forget-password.component';
import { CoursesComponent } from './components/dashboard/courses/courses.component';
import { StudentDetailsComponent } from './components/dashboard/student-details/student-details.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './components/auth/auth/auth.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { PrimeModule } from './module/primemodule';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetPasswordComponent,
    CoursesComponent,
    StudentDetailsComponent,
    AuthComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    AuthModule,
    DashboardModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
