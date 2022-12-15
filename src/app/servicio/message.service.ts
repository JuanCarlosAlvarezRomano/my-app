import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  //Metodo para añadir un mensaje al log
  add(message: string) {
    this.messages.push(message);
  }

  //Metodo para limpiar todos los mensajes
  clear() {
    this.messages = [];
  }
}