import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndividualitemRoutingModule } from './individualitem-routing.module';
import { IndividualitemComponent } from './individualitem.component';


@NgModule({
  declarations: [IndividualitemComponent],
  imports: [
    CommonModule,
    IndividualitemRoutingModule
  ]
})
export class IndividualitemModule { }
