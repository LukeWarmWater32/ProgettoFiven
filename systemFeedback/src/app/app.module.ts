import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { FormTagComponent } from './form-tag/form-tag.component';
import { HttpClientModule } from '@angular/common/http';
import { TabTagComponent } from './tab-tag/tab-tag.component';

@NgModule({
  declarations: [
    AppComponent,
    FormTagComponent,
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
