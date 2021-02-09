import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { StudentListComponent } from './pages/student-list/student-list.component';
import { StudentRoutingModule } from './student.module.routing';



@NgModule({
  declarations: [
    StudentComponent,
    StudentListComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
