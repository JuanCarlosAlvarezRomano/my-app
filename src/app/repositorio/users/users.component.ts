import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { UserService } from '../../servicio/user.service'; 
import { MessageService } from '../../servicio/message.service';

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
