import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { GetComponent } from './get/get.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'add',component:AddComponent},
  {path:'update',component:UpdateComponent},
  {path:'get',component:GetComponent},
  {path:'delete',component:DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
