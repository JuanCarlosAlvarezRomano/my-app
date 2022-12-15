import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  //Metodo para añadir un mensaje al log
  add(message: string) {
    let fecha = new Date;
    this.messages.push(fecha+" "+message);
  }

  //Metodo para limpiar todos los mensajes
  clear() {
    this.messages = [];
  }
}