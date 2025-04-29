import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RevisaoCssPageRoutingModule } from './revisao-css-routing.module';

import { RevisaoCssPage } from './revisao-css.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RevisaoCssPageRoutingModule
  ],
  declarations: [RevisaoCssPage]
})
export class RevisaoCssPageModule {}
