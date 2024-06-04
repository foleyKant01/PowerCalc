import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPropertyPageRoutingModule } from './add-property-routing.module';

import { AddPropertyPage } from './add-property.page';
import { HeaderPageModule } from '../include/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderPageModule,
    AddPropertyPageRoutingModule
  ],
  declarations: [AddPropertyPage]
})
export class AddPropertyPageModule {}
