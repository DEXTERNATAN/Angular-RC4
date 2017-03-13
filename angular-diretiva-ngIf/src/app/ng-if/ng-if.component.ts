import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  mostrarCursos: boolean = false;

  curso = [];

  onMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos;
  }


  mostrarImg: boolean = false;

onMostrarIMG(){
  this.mostrarImg = !this.mostrarImg;
}


}
