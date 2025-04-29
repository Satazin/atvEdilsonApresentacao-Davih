import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RevisaoCssLayoutPageRoutingModule } from './revisao-css-layout-routing.module';

import { RevisaoCssLayoutPage } from './revisao-css-layout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RevisaoCssLayoutPageRoutingModule
  ],
  declarations: [RevisaoCssLayoutPage]
})
export class RevisaoCssLayoutPageModule {}
