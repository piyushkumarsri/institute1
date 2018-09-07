import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-field-errors',
  templateUrl: './field-errors.component.html',
  styleUrls: ['./field-errors.component.scss']
})
export class FieldErrorsComponent implements OnInit {
  @Input()
  control: FormControl;
  @Input()
  label: string;
  constructor() {}

  ngOnInit() {}

  getLabel() {
    return this.label ? this.label : 'Field';
  }
}
