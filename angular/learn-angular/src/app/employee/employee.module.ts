import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee.component';
import { EmployeeService } from 'src/shared/service/employee.service';
import { EmployeeRoutingModule } from './employee.module.routing';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';



@NgModule({
  declarations: 
  [
    EmployeeListComponent,
    EmployeeComponent,
    EmployeeDetailComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ],
  providers: [EmployeeService]
  
})
export class EmployeeModule { }
