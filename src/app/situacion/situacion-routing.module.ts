import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SituacionPage } from './situacion.page';

const routes: Routes = [
  {
    path: '',
    component: SituacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SituacionPageRoutingModule {}
