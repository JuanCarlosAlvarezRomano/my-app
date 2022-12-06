import { Injectable } from '@angular/core';
import { User } from '../user';
import { Usuarios } from '../mock-users';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Card, Cards } from 'scryfall-api';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  card: string | undefined;
  lstcards: String[]=[];
  lstimg: String[]=[];
  constructor(private messageService: MessageService) { }

  //getUser():Observable<User[]> {
  //  const users = of(Usuarios);
  //  this.messageService.add('UserService: fetched users');
  //  return users;
 // }

 // getUsuario(id: Number): Observable<User>{
  //  const usuario = Usuarios.find(u => u.id === id)!;
 //   this.messageService.add(`UsuarioService: fetched hero id=${id}`);
 //   return of(usuario);
  //}

  async getCard(nombre: string): Promise<Observable<Card | undefined>>{
    let carta: String | undefined;
    const cardname = await this.obtencarta(nombre).then(data => {return data})

    
    return of(cardname);
  }

  addlist(nombre: String, img: String){
    this.lstcards.push(nombre);
    this.lstimg.push(img);
    this.messageService.add(`CartaService: Carta añadida=${nombre}`);
  }

  obtencarta(nombre: string){
    const card=Cards.byName(nombre).then(response =>response);
    return card;
  }
}
