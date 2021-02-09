import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeModule } from './employee/employee.module';
import { HttpClientModule } from "@angular/common/http";
import { EmployeeService } from 'src/shared/service/employee.service';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student/pages/student-list/student-list.component';
import { StudentModule } from './student/student.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeeModule,
    FormsModule,
    HttpClientModule,
    StudentModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
