import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BooksrPageRoutingModule } from './booksr-routing.module';

import { BooksrPage } from './booksr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BooksrPageRoutingModule
  ],
  declarations: [BooksrPage]
})
export class BooksrPageModule {}
