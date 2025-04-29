import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RevisaoCssLayoutPage } from './revisao-css-layout.page';

const routes: Routes = [
  {
    path: '',
    component: RevisaoCssLayoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RevisaoCssLayoutPageRoutingModule {}
