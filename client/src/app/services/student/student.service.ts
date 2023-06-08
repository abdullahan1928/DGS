import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IStudent } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  student?: IStudent[];
  baseURL = 'http://localhost:3000/student';

  constructor(private http: HttpClient) { }

  getStudents() {
    return this.http.get(this.baseURL + '/');
  }

  getStudentById(id: any) {
    return this.http.get(this.baseURL + `/${id}`);
  }

  getStudentByGrNo(gr_no: any) {
    return this.http.get(this.baseURL + `/gr/${gr_no}`);
  }

  getStudentsCount() {
    return this.http.get(this.baseURL + '/count');
  }

}
