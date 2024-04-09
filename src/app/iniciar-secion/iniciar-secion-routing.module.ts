import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniciarSecionPage } from './iniciar-secion.page';

const routes: Routes = [
  {
    path: '',
    component: IniciarSecionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniciarSecionPageRoutingModule {}
