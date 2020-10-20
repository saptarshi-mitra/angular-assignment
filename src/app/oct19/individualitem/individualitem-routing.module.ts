import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndividualitemComponent } from './individualitem.component';

const routes: Routes = [{ path: '', component: IndividualitemComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndividualitemRoutingModule { }
