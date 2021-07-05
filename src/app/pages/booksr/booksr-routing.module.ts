import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksrPage } from './booksr.page';

const routes: Routes = [
  {
    path: '',
    component: BooksrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksrPageRoutingModule {}
