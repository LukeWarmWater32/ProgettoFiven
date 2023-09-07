import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTagComponent } from './form-tag/form-tag.component';
import { TabTagComponent } from './tab-tag/tab-tag.component';

const routes: Routes = [
  { path: "formTag/:id", component: FormTagComponent },
  { path: "tabellaTag", component: TabTagComponent }

];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
