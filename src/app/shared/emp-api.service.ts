import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmpApiService {

    empList = [
    { id: 1, name: "Erős Gábor", city: "Szeged", salary: 395},
    { id: 2, name: "Szegedi Károly", city: "Szeged", salary: 395},
    { id: 3, name: "Láng Ernő", city: "Pécs", salary: 395},
    { id: 4, name: "Forint Tallér", city: "Szeged", salary: 398},
    { id: 5, name: "Zákony Orsolya", city: "Szeged", salary: 392},
  ]

  getEmployees() {
    //backend lesz
    return this.empList
  }
}
