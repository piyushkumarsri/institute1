import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DataService } from '../../../../app/data.service';

@Component({
  selector: 'app-adm-chapters',
  templateUrl: './adm-chapters.component.html',
  styleUrls: ['./adm-chapters.component.scss']
})
export class AdmChaptersComponent implements OnInit {
  availableCourses;
  form: FormGroup;
  constructor(private fb: FormBuilder,
    private ds: DataService) { }

  ngOnInit() {
    this.ds.getCourses().subscribe(res => {
      this.availableCourses = res.data;
     // console.log("received the response from json:", res.data);
    })
    this.prepareForm();
  }

  prepareForm() {
    this.form = this.fb.group({
      course: [null, [Validators.required]],
      chapter_name: ['one', [Validators.required]],
      accessbility: [],
      content: [],
      created_date: []
    });

    // this.form = new FormGroup({
    //   course: new FormControl(null,[Validators.required]),
    //   chapter_name: new FormControl('one',[Validators.required]),
    //   accessbility: new FormControl(),

    // })

  }
  get mdContent() {
    return this.form.get('content').value;
  }
}
