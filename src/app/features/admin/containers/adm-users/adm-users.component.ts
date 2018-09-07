import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../app/data.service';

@Component({
    selector: 'app-adm-users',
    templateUrl: './adm-users.component.html',
   // styleUrls: ['./adm-users.component.css']
})
export class AdmUsersComponent implements OnInit {
    users;
    constructor(private ds:DataService) { }

    ngOnInit(): void {
        this.ds.getUsers().subscribe((res:any)=>{
            this.users = res.data;
        })
     }
}
