import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewPropertyPageRoutingModule } from './view-property-routing.module';

import { ViewPropertyPage } from './view-property.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewPropertyPageRoutingModule
  ],
  declarations: [ViewPropertyPage]
})
export class ViewPropertyPageModule {}
