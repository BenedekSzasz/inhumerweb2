import { Component, inject } from '@angular/core';
import { EmpApiService } from '../shared/emp-api.service';
import Employee from '../interfaces/employee';
@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent {

  empService = inject(EmpApiService);

  empList!: Employee []


  ngOnInit() {
    let data = this.empService.getEmployees();
    console.log(data);
    this.empList = this.empService.getEmployees();

  }
}
