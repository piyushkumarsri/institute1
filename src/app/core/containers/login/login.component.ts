import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../app/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  filter;
  username = 'admin';

  // dependency injection
  constructor(private ds: DataService) {

  }

  ngOnInit() {
  }

  doLogin(loginform) {
    // console.log(loginform);
    this.ds.doLogin(loginform.value);
  }

}
