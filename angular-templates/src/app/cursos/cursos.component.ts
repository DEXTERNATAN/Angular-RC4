import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  moduleId: module.id,
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService]
})
export class CursosComponent implements OnInit {

  constructor(cursosService: CursosService) { 
    this.cursos = cursosService.getCursos();
  }

  ngOnInit() {
  }

  nome = 'Rafael';

  cursos;

}
