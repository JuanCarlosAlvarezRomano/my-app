import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/servicio/message.service';
import { UserService } from '../../servicio/user.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  //Lista de nombres de las cartas guardadas
  lstCardsname: String[] = [];
  //Lista de URL de las cartas guardadas
  lstImagen: String[] = [];
  constructor(private userService: UserService, private messageService: MessageService) { }

    //Metodo que se realiza al iniciar el componente
  ngOnInit(): void {
    this.lstCardsname = this.userService.lstcards;
    this.lstImagen = this.userService.lstimg;
  }

  //Metodo para borrar una carta de la lista
  borrar(i: number){
    let nombre=this.lstCardsname[i];
    this.lstCardsname.splice(i,1);
    this.lstImagen.splice(i,1);
    this.messageService.add(`CartaService: Ha eliminado la carta de nombre=${nombre}. `);
  }

}
