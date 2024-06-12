import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewPropertyPageRoutingModule } from './view-property-routing.module';

import { ViewPropertyPage } from './view-property.page';
import { HeaderPageModule } from '../include/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // HeaderPageModule,
    ReactiveFormsModule,
    ViewPropertyPageRoutingModule
  ],
  declarations: [ViewPropertyPage]
})
export class ViewPropertyPageModule {}
