import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/shared/service/employee.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  public employees = []
  constructor(
    private _employeeService : EmployeeService
  ) { }

  ngOnInit(): void {
    this._employeeService.getEmployees()
    .subscribe(data => this.employees = data );
  }

}
