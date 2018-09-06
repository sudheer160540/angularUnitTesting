import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormvalidationComponent } from './formvalidation/formvalidation.component';

@NgModule({
  declarations: [
    AppComponent,
    FormvalidationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
