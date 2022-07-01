import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee/employee.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  message = 'Hello Hello World!';
  color = 'red';
  isBig = true;
  isDisplayed = true;
  alertMessage = '';
  content = '';
  myList = [
    "hello",
    "world"
  ];
  name = '';
  gender = '';
  title = '';
  tenure = 0;
  salary = 0;
  employees:any = [];
  isEmployeeShown = true;

  constructor(private employeeService: EmployeeService) {
    // This runs first
  }

  ngOnInit(): void {
    // This runs when the component HAS BEEN CREATED
    this.fetchEmployees();
  }

  switchSize() {
    this.isBig = !this.isBig;
  }

  switchDisplay() {
    this.isDisplayed = !this.isDisplayed;
  }

  displayAlert(message: string) {
    alert(message);
  }

  addContent(content: string) {
    this.myList.push(content);
    this.content = '';
  }

  clearEmployeeInputs() {
    this.name = '';
    this.title = '';
    this.gender = '';
    this.tenure = 0;
    this.salary = 0;
    this.isEmployeeShown = true;
  }

  fetchEmployees() {
    this.employees = this.employeeService.getEmployees();
  }

  addEmployee(name: string, title: string, gender: string, tenure: number, salary: number, isEmployeeShown: boolean) {
    const employee = {
      name: name,
      gender: gender,
      title: title,
      tenure: tenure,
      salary: salary,
      isEmployeeShown: isEmployeeShown,
    };

    this.employeeService.addEmployee(employee);

    this.clearEmployeeInputs();
  }

  updateEmployee(index: number, name: string, title: string, gender: string, tenure: number, salary: number, isEmployeeShown: boolean) {
    const employee = {
      name: name,
      gender: gender,
      title: title,
      tenure: tenure,
      salary: salary,
      isEmployeeShown: isEmployeeShown,
    };

    this.employeeService.updateEmployee(index, employee);

    this.clearEmployeeInputs();
  }

  deleteEmployee(index: number) {
    this.employeeService.deleteEmployee(index);
  }

}
