import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {
  ConfirmationService,
  MessageService,
  ConfirmEventType,
} from 'primeng/api';
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent {
  public todosList: any;
  public showloader = false;
  displayDialog: boolean = false;
  displayEditDialog: boolean = false;
  public index: any;
  public textareavalue = '';
  constructor(
    private dataservice: DataService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}
  ngOnInit() {
    this.showloader = true;
    this.todosList = this.dataservice.getTodos().subscribe((res) => {
      this.todosList = res;
      this.showloader = false;
      console.log(this.todosList);
    });
  }
  deleteRecord(data: any) {
    this.index = this.todosList.indexOf(data);
    console.log(this.index);
    this.displayDialog = true;
  }
  hideDialog() {
    this.displayDialog = false;
  }
  confirmAction() {
    this.todosList.splice(this.index, 1);
    this.displayDialog = false;
  }
  editRecord() {
    this.displayEditDialog = true;
  }
}
