import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Etapa1PageRoutingModule } from './etapa1-routing.module';
import { Etapa1Page } from './etapa1.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Etapa1PageRoutingModule
  ],
  declarations: [Etapa1Page]
})
export class Etapa1PageModule {}
