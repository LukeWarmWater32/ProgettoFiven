import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabellaComponent } from './tabella/tabella.component';
import { UpdateTagComponent } from './update-tag/update-tag.component';
import { TabellaTagComponent } from './tabella-tag/tabella-tag.component';
import { FormTagComponent } from './form-tag/form-tag.component';

@NgModule({
  declarations: [
    AppComponent,
    TabellaComponent,
    UpdateTagComponent,
    TabellaTagComponent,
    FormTagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
