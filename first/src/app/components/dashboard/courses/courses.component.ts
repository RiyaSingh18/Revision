import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent {
  userForm!: FormGroup;
  public postsdata: any;
  multicheck: boolean = false;
  checkedItems: any[] = [];

  constructor(private fb: FormBuilder, private data: DataService) {
    this.userForm = this.fb.group({
      id: new FormControl(''),
      username: new FormControl(''),
      email: new FormControl(''),
      city: new FormControl(''),
    });
  }
  ngOnInit() {
    this.data.getPosts().subscribe((posres) => {
      this.postsdata = posres;
      console.log(this.postsdata);
    });
  }

  savedata(data: any) {
    console.log(data);
  }
  //checkeditems(check: any) {
  //  this.multicheck = !this.multicheck;
  //  if (this.multicheck) {
  //    console.log('checked' + check);
  //  } else {
  //    console.log('not checked' + check);
  //  }
  //}
}
