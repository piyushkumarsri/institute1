import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CustomValidaors } from "../../../../shared/validators";
import {CalendarModule} from 'primeng/calendar';
import { DataService } from '../../../../app/data.service';

  @Component({
    selector: 'app-adm-batch-creation',
    templateUrl: './adm-batch-creation.component.html',
    styleUrls: ['./adm-batch-creation.component.scss']
  })
  export class AdmBatchCreationComponent implements OnInit {
    form: FormGroup;
    constructor(private fb: FormBuilder,private ds:DataService) { }
    availableCourses;
    ngOnInit() {
      this.prepareForm();
  
      this.ds.getCourses().subscribe(res=>{
          this.availableCourses = res.data;
      })
    }
    prepareForm() {
      this.form = this.fb.group({
        batch_name: [null, [Validators.required]],
        batch_type: [null, [Validators.required]],       
        course: [null, [Validators.required]],
      });
      
  }

  save() {
    if(this.form.valid){
      this.ds.saveBatch(this.form.value).subscribe(res=>{
        if(res.status) {
          alert('Batch saved');
          this.form.reset();
        }
      })
    }
  }

 
  }
