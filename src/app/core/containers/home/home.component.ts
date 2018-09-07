import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../app/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private ds: DataService) { }

  ngOnInit() {
    console.log("got subject", this.ds.getSubject());

    this.ds.getCourses().subscribe((res: any) => {
      console.log("Got courses in home", res.data);
    });
  }

}
