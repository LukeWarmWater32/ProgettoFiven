import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTagComponent } from './form-tag/form-tag.component';
import { ModificaTagComponent } from './modifica-component/modifica-tag/modifica-tag.component';

const routes: Routes = [
  { path: "formTag", component: FormTagComponent },
  { path: "modifyTag/:id", component: ModificaTagComponent }
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
