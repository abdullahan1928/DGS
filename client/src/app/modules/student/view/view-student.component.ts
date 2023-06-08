import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IStudent } from 'src/app/services/student/student.model';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.scss']
})
export class ViewStudentComponent {

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
  ) { }

  gr_no = this.route.snapshot.params['id'];

  studentData: any = {};

  ngOnInit(): void {
    this.viewStudent(this.gr_no);
  }

  unsorted() { return 0; }

  viewStudent(gr_no: string) {
    this.studentService.getStudentByGrNo(gr_no).subscribe((res: any) => {
      const { gr_no, name, father_name, status, gender, fee, DOB, address, class: classs } = res['student'] as IStudent;
      this.studentData = {
        gr_no, name, father_name, status, gender, fee, DOB, address, class: classs
      }
      console.log(this.studentData);
    });
  }

}
