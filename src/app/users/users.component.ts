import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service'; 
import { MessageService } from '../message.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  lstUser: User[] = [];

  constructor(private userService: UserService) { }

  
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers():void{
   // this.userService.getUser().subscribe(users => this.lstUser = users)
  }
}

export class users{}
