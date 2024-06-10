import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewPropertyPage } from './view-property.page';

const routes: Routes = [
  {
    path: '',
    component: ViewPropertyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewPropertyPageRoutingModule {}
