import { Component, OnInit } from '@angular/core';
import { UserService } from '../../servicio/user.service';
import { Cards } from 'scryfall-api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  //Lista de cartas obtenida de la busqueda
  lstCards: String[] = [];
  //Lista de nombres de las cartas ya obtenidas
  lstCardsname: String[] = [];

  constructor(private userService: UserService) { }

  //Metodo que se realiza al iniciar el componente
  ngOnInit(): void {
    this.getUsers();
    this.getList();
  }

  //Metodo para buscar cartas de forma predefinida al iniciar el componente
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

  //Metodo para obtener la lista de cartas guardadas
  getList(){
    this.lstCardsname = this.userService.lstcards
  }

  //Metodo para buscar una carta por el nombre que ponga el usuario
  search(nombre: string){
    this.lstCards=[];
    Cards.autoCompleteName(nombre).then(results => {
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

}
