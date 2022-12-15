import { Component, OnInit, Input, Injectable, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../../servicio/user.service'; 

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  //Nombre de la carta
  card: string | undefined;
  //URL de la imagen de la carta
  img: string | undefined;
  //Descripcion de la carta
  descripcion: string | undefined;
  //Coste de la carta
  coste: string | undefined;

  constructor(  
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
    ) { }

  //Metodo que se realiza al iniciar el componente
  ngOnInit(): void {
    //this.getHero();
    this.getCard();
  }
  //Metodo asincrono que obtine una carta en funcion de un nombre completo
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

  //Metodo para añadir una carta a la lista
  addList(nombre: String, img: string){
    this.userService.addlist(nombre, img);
  }
  
  //Metodo para volver a la pagina anterior
  goBack(): void {
    this.location.back();
  }
}
