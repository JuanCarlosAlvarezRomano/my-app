import { Component, OnInit } from '@angular/core';
import { UserService } from '../../servicio/user.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  lstCardsname: String[] = [];
  lstImagen: String[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.lstCardsname = this.userService.lstcards;
    this.lstImagen = this.userService.lstimg;
  }

}
