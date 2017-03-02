import { 
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterViewChecked,
  AfterContentChecked,
  AfterViewInit,
  OnDestroy,
  Input
 } from '@angular/core';

@Component({
  selector: 'life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterViewChecked,
  AfterContentChecked,
  AfterViewInit,
  OnDestroy {

    @Input() valorInicial = 10;

  constructor() { }
  
  ngOnInit() {
  }
  ngOnChanges(){
    console.log('ngOnChanges');
  }
  ngDoCheck(){
    console.log('DoCheck');
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit');
  }
  ngAfterViewChecked(){
    console.log('AfterViewChecked');
  }
  ngAfterContentChecked(){
    console.log('AfterContentChecked');
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }
  ngOnDestroy(){
    console.log('ngOnDestroy');
  }
  
  private log(hook: string){
    console.log(hook);
  }

}
