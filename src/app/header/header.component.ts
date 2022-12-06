import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  title = 'Buscador de Magic the Gathering';
  title2 = 'Investigacion Ángular';
  ngOnInit(): void {
  }

}
