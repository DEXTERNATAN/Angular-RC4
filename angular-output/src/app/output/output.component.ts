import { Component, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {


  incrementar(){
    this.valor += 1;
    this.mudouValor.emit({novoValor: this.valor});
  }
  decrementar(){
    this.valor --;
    this.mudouValor.emit({novoValor: this.valor});
  }

  @Output() mudouValor = new EventEmitter();

  valor: number = 0;

  onValorMudou(event){

    console.log(event);

  }


  constructor() { }



}
