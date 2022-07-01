import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, OnChanges, OnDestroy {
  @Input() employee: any;

  isEdited = false;

  constructor() { }

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.isEdited = true;
    console.log('Employee Updated');
    console.log(this.isEdited);
  }

  ngOnDestroy(): void {
    console.log('Employee Deleted');
    console.log(this.employee);
  }

}
