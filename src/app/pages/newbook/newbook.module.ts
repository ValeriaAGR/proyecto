import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewbookPageRoutingModule } from './newbook-routing.module';

import { NewbookPage } from './newbook.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewbookPageRoutingModule
  ],
  declarations: [NewbookPage]
})
export class NewbookPageModule {}
