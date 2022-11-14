import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Cards } from 'scryfall-api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  lstUser: User[] = [];
  lstCards: String[] = [];
  lstCardsBusqueda: String[] = [];
  lstCardsname: String[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
    this.getList();
  }

  getUsers():void{
   // this.userService.getUser().subscribe(users => this.lstUser = users.slice(1,5));
    Cards.autoCompleteName('ab').then(results => {
      for (const result of results) {
        this.lstCards.push(result);
        console.log(result);
        // Bloodscent
        // Blood Scrivener
        // Bloodscale Prowler
        // Burning-Tree Bloodscale
        // Ghor-Clan Bloodscale
      }
    });
  }

  getList(){
    this.lstCardsname = this.userService.lstcards
  }

  search(nombre: string){
    this.lstCardsBusqueda=[];
    Cards.autoCompleteName(nombre).then(results => {
      for (const result of results) {
        this.lstCardsBusqueda.push(result);
        console.log(result);
        // Bloodscent
        // Blood Scrivener
        // Bloodscale Prowler
        // Burning-Tree Bloodscale
        // Ghor-Clan Bloodscale
      }
    });
  }

}
