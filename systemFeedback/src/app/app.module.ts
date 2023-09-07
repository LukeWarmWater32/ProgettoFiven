import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UpdateTagComponent } from './update-tag/update-tag.component';

import { FormTagComponent } from './form-tag/form-tag.component';
import { ModificaTagComponent } from './modifica-component/modifica-tag/modifica-tag.component';
import { HttpClientModule } from '@angular/common/http';
import { TabTagComponent } from './tab-tag/tab-tag.component';

@NgModule({
  declarations: [
    AppComponent,
    
    UpdateTagComponent,
    
    FormTagComponent,
    ModificaTagComponent,
    TabTagComponent,
 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
