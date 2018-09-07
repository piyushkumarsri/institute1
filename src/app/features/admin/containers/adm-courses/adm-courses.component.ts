import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CustomValidaors } from "../../../../shared/validators";
import { CalendarModule } from 'primeng/calendar';
import { DataService } from '../../../../app/data.service';

@Component({
  selector: 'app-adm-courses',
  templateUrl: './adm-courses.component.html',
  styleUrls: ['./adm-courses.component.scss']
})
export class AdmCoursesComponent implements OnInit {

  form: FormGroup;
  courses;
  constructor(private fb: FormBuilder, private ds: DataService) { }

  ngOnInit() {
    this.prepareForm();
    this.fetchCourses();


  }

  fetchCourses() {
    this.ds.getCourses().subscribe(res => {
      this.courses = res.data;
    })
  }
  prepareForm() {
    this.form = this.fb.group({
      course_name: [null, [Validators.required]],
      duration: [null, [Validators.required]]
    });

  }

  save() {
    if (this.form.valid) {
      this.ds.saveCourse(this.form.value).subscribe(res => {
        if (res.status) {
          alert('Course saved!');
          this.form.reset();
          this.fetchCourses();
        }
      });
    }
  }


}

