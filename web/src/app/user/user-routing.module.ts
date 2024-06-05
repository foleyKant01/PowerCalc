import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPage } from './user.page';
import { HomePage } from './home/home.page';
import { AddPropertyPage } from './add-property/add-property.page';

const routes: Routes = [
  // {
  //   path: '',
  //   component: UserPage
  // },
  { path:'', component: UserPage,
  children: [
    { path:'', redirectTo:'home', pathMatch:'full' },
    {
      path: 'home',
      loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
    },
    {
      path: 'add-property',
      loadChildren: () => import('./add-property/add-property.module').then( m => m.AddPropertyPageModule)
    },
    {
      path: 'header',
      loadChildren: () => import('./include/header/header.module').then( m => m.HeaderPageModule)
    },
    {
      path: 'invoice',
      loadChildren: () => import('./invoice/invoice.module').then( m => m.InvoicePageModule)
    }
  ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPageRoutingModule {}
