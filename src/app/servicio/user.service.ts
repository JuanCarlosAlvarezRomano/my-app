import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Card, Cards } from 'scryfall-api';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //Lista de nombres de cartas guardadas
  lstcards: String[]=[];
  //Lista de URL de imagenes de las cartas guardadas
  lstimg: String[]=[];
  
  constructor(private messageService: MessageService) { }

  //Metodo asincrono para obtener una carta
  async getCard(nombre: string): Promise<Observable<Card | undefined>>{
    const cardname = await this.obtencarta(nombre).then(data => {return data})

    return of(cardname);
  }

  //Metodo para añadir una carta a la lista de cartas guardadas
  addlist(nombre: String, img: String){
    let contador = 0
    this.lstcards.forEach(element => {
      if(element == nombre){
        contador++;
      }
    });
    if(contador>=4){
      this.messageService.add(`CartaService: Ya hay 4 cartas con el nombre=${nombre}, por favor no añada mas de 4 cartas iguales`);
    }else{
      this.lstcards.push(nombre);
      this.lstimg.push(img);
      this.messageService.add(`CartaService: Carta añadida=${nombre}`);
    }
  }

  //Metodo auxiliar para obtener una carta
  obtencarta(nombre: string){
    const card=Cards.byName(nombre).then(response =>response);
    return card;
  }
}
