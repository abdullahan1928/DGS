import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student/student.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { IStudent } from 'src/app/services/student/student.model';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})

export class StudentComponent {

  filterSelectObj: any = [];
  filterValues: any = {};

  constructor(
    public studentService: StudentService,
    private router: Router,
    public dialog: MatDialog,
    private _liveAnnouncer: LiveAnnouncer,
  ) { }

  ngOnInit() {
    this.refreshStudentList();
    this.getStudentsCount();
  }

  displayedColumns: string[] = ['gr_no', 'name', 'father_name', 'gender', 'class', 'DOB', 'status', 'fee', 'actions'];
  dataSource!: MatTableDataSource<IStudent>;
  studentsCount = 0;


  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatAccordion, { static: true }) accordion!: MatAccordion;

  refreshStudentList() {
    this.studentService.getStudents().subscribe((res: any) => {
      this.studentService.student = res['students'] as IStudent[];
      this.dataSource = new MatTableDataSource(this.studentService.student);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  viewStudent(student: IStudent) {
    this.router.navigate(['students/view', student.gr_no]);
  }

  getStudentsCount() {
    this.studentService.getStudentsCount().subscribe((res: any) => {
      this.studentsCount = res['studentsCount'];
    });
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  applyFilter(columnName: string, filterValue: string) {

    this.dataSource.filterPredicate = (data: any, filter: string) => {
      filter = filter.trim().toLowerCase();
      return data[columnName].toLowerCase().includes(filter);
    };
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  clearFilters() {
    this.dataSource.filter = '';
  }

  statuses = [
    { value: 'active', viewValue: 'active' },
    { value: 'withdrawal', viewValue: 'withdrawal' }
  ];

}
