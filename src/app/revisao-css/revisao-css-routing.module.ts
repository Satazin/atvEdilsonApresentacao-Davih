import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RevisaoCssPage } from './revisao-css.page';

const routes: Routes = [
  {
    path: '',
    component: RevisaoCssPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RevisaoCssPageRoutingModule {}
