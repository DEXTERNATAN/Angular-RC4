import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  constructor() { }

  conteudoAtual : string ='';
  conteudoSalvo : string ='';

  isMouseOver = false;

  ngOnInit() {
  }

  onClick(){
    document.write('Botão clicado');
  }
  onKeyup(event:KeyboardEvent){
    console.log(event);
    this.conteudoAtual = (<HTMLInputElement>event.target).value;
  }
  onSave(event: string){
    this.conteudoSalvo = value;
  }

  onMouse(){
    this.isMouseOver = !this.isMouseOver;
  }

}
