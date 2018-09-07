import { FormControl } from '@angular/forms';

export class CustomValidaors {
  static pincode(control: FormControl) {
    if (!control.value) {
      return null;
    }
    if (/^\d{6}$/.test(control.value)) {
      return null;
    } else {
      return { pincode: true }; // here pincode unique error key for this
    }
  }

  static alfaspace(control: FormControl) {
    if (!control.value) {
      return null;
    }
    if (/^[a-zA-Z ]+$/.test(control.value)) {
      return null;
    } else {
      return { alfaspace: true }; // here alfaspace unique error key for this
    }
  }
  static mobile(control: FormControl) {
    if (!control.value) {
      return null;
    }
    if (/^\d{10}$/.test(control.value)) {
      return null;
    } else {
      return { mobile: true }; // here mobile unique error key for this
    }
  }

  static indianMobile(control: FormControl) {
    if (!control.value) {
      return null;
    }
    if (/^\+91\d{10}$/.test(control.value)) {
      return null;
    } else {
      return { indianMobile: true }; // here indianMobile unique error key for this
    }
  }
}
