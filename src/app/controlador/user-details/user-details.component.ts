import { Component, OnInit, Input, Injectable } from '@angular/core';
import { User } from '../../user';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../../servicio/user.service'; 

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user: User | undefined;
  card: string | undefined;
  img: string | undefined;
  descripcion: string | undefined;
  coste: string | undefined;
  lstCards: String[]=[];

  constructor(  
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
    ) { }

  ngOnInit(): void {
    //this.getHero();
    this.getCard();
  }

 // getHero(): void {
 //   const id = Number(this.route.snapshot.paramMap.get('id'));
 //   this.userService.getUsuario(id)
 //     .subscribe(user => this.user = user);
 // }

  async getCard():Promise<void> {
    const nombre = String(this.route.snapshot.paramMap.get('id'));
    (await this.userService.getCard(nombre))
    .subscribe(card => {
       this.img = card?.image_uris?.small;
       this.card = card?.name;
       this.coste = card?.mana_cost;
       this.descripcion = card?.oracle_text;
    });
  }

  addList(nombre: String, img: string){
    this.userService.addlist(nombre, img);
  }
  
  goBack(): void {
    this.location.back();
  }
}
