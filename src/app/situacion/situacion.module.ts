import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SituacionPageRoutingModule } from './situacion-routing.module';

import { SituacionPage } from './situacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SituacionPageRoutingModule
  ],
  declarations: [SituacionPage]
})
export class SituacionPageModule {}
