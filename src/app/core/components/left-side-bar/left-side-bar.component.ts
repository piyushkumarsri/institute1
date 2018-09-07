import { Component, OnInit } from '@angular/core';
import { getAdminMenu, getUserMenu } from '../../menu';

@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.scss']
})
export class LeftSideBarComponent implements OnInit {

  currentMenu;
  constructor() { }

  ngOnInit() {
    this.currentMenu = getAdminMenu();
    // this.currentMenu = getUserMenu();
  }

}
