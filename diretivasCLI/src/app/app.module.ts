import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DiretivasNgifComponent } from './diretivas-ngif/diretivas-ngif.component';
import { TesteLASSComponent } from './teste-lass/teste-lass.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretivasNgifComponent,
    TesteLASSComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
