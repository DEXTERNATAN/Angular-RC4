import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'db',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  url = "http://www.linkeding.com";

  urlImg = "http://lorempixel.com/400/200/sports/1/";

  getValor(){
    return 1;
  }

}
