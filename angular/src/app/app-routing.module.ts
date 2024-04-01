import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { FormComponent } from './form/form.component';

// all your routes go in here
// routes must not start with a slash
const routes: Routes = [
  {path: "", component: DisplayComponent},
  {path: "create", component: FormComponent},
  {path: "edit", component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
