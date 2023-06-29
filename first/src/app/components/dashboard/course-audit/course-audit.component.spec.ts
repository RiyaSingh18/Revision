import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAuditComponent } from './course-audit.component';

describe('CourseAuditComponent', () => {
  let component: CourseAuditComponent;
  let fixture: ComponentFixture<CourseAuditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseAuditComponent]
    });
    fixture = TestBed.createComponent(CourseAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
