import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CustomValidaors } from "../../../../shared/validators";
import { ObservableExample } from "../../../../shared/observable.example";
import { DataService } from "../../../../app/data.service";

@Component({
  selector: "app-adm-user-registration",
  templateUrl: "./adm-user-registration.component.html",
  styleUrls: ["./adm-user-registration.component.scss"]
})
export class AdmUserRegistrationComponent implements OnInit {
  form: FormGroup;
  constructor(private ds: DataService) {
    //  let obexample = new ObservableExample();
    // obexample.testObservable();

  }

  ngOnInit() {
    this.prepareForm();
  }

  saveUser() {
    if (this.form.valid) {
      this.ds.saveUser(this.form.value).subscribe((res: any) => {
        console.log(res);
        alert('User saved');
        this.form.reset();
      }, (err) => {
        alert('Failed to save!');
        console.log(err);
      })
    } else {
      alert('Please fillup the form');
    }
  }

  disable() {
    this.form.disable();
  }

  enable() {
    this.form.enable();
    this.form.getRawValue();
  }
  disableAddr() {
    this.form.get("address").disable();
  }
  enableAddr() {
    this.form.get("address").enable();
  }

  fillupForm() {
    this.form.setValue({
      name: "afsdA",
      email: "fsdds",
      mobile: "9995000",
      gender: "Male",
      address: {
        line1: "dsad",
        line2: "dsad",
        city: "vsdfsf",
        pincode: "121211111"
      }
    });
  }

  patchForm() {
    this.form.patchValue({
      name: "afsdA",

      gender: "Male",
      address: {
        line1: "dsad",
        line2: "dsad",
        city: "vsdfsf"
      }
    });

  }



  prepareForm() {
    this.form = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        CustomValidaors.alfaspace
        // Validators.pattern("[a-z]+")
      ]),
      email: new FormControl(),
      mobile: new FormControl(),
      gender: new FormControl("Male"),
      address: new FormGroup({
        line1: new FormControl(),
        line2: new FormControl(),
        city: new FormControl(),
        pincode: new FormControl(null, [
          Validators.required,
          CustomValidaors.pincode
        ])
      })
    });
  }
}
