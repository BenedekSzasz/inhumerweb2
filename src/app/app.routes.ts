import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { PositionComponent } from './position/position.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'employee', component: EmployeeComponent },
    { path: 'position', component: PositionComponent },
    { path: 'login', component: LoginComponent }
];

