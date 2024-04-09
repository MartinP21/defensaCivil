import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciarSecionPageRoutingModule } from './iniciar-secion-routing.module';

import { IniciarSecionPage } from './iniciar-secion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniciarSecionPageRoutingModule
  ],
  declarations: [IniciarSecionPage]
})
export class IniciarSecionPageModule {}
