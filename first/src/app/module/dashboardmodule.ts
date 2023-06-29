import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from '../components/dashboard/courses/courses.component';
import { StudentDetailsComponent } from '../components/dashboard/student-details/student-details.component';
import { DashboardComponent } from '../components/dashboard/dashboard/dashboard.component';
import { CourseAuditComponent } from '../components/dashboard/course-audit/course-audit.component';
import { CourseSummaryComponent } from '../components/dashboard/course-summary/course-summary.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'courses', component: CoursesComponent },
      { path: 'stu-detail', component: StudentDetailsComponent },
      { path: 'course-audit', component: CourseAuditComponent },
      { path: 'course-summary', component: CourseSummaryComponent },
    ],
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class DashboardModule {}
