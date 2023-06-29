import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

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
import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationService, MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CourseAuditComponent } from './components/dashboard/course-audit/course-audit.component';
import { CourseSummaryComponent } from './components/dashboard/course-summary/course-summary.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetPasswordComponent,
    CoursesComponent,
    StudentDetailsComponent,
    AuthComponent,
    DashboardComponent,
    CourseAuditComponent,
    CourseSummaryComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    DashboardModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeModule,
    HttpClientModule,
  ],
  providers: [DataService, AuthService, ConfirmationService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
