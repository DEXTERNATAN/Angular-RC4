import { Component, OnInit } from '@angular/core';

import { TesteService } from './teste.service';


@Component({
  selector: 'teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css'],
  providers: [TesteService]

})
export class TesteComponent implements OnInit {

  constructor(tt : TesteService) {
      this.teste = tt.getTeste();
     }

  ngOnInit() {
  }


  num = 100;

  teste;
  url = "http://lorempixel.com/g/400/200/";

}
