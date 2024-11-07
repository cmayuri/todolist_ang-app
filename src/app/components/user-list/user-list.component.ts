import { Component, OnInit } from '@angular/core';
import { UserListService } from 'src/app/services/user-list.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
 users: User[]=[];

 constructor(private userservice:UserListService){}
ngOnInit(): void {
    this.userservice.getUsers().subscribe((data)=>{
      this.users = data;
    })
}

}
