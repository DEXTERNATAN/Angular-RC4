import { Component, OnInit } from '@angular/core';

import { LifeComponent } from './life/life.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(){}

deletarConteudo = false;
  valorInicial = 15;

  ngOnInit(){

  }
  
}
