import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { SingleCakeComponent } from './single-cake/single-cake.component';
import { ShowCakeComponent } from './show-cake/show-cake.component';
import { CheckoutCakeComponent } from './checkout-cake/checkout-cake.component';


const routes: Routes = [
  {
    path: 'admin/addCake',
    component: AdminComponent
  },
  {
    path: '',
    component: SingleCakeComponent
  },
  {
    path: 'homepage/:id',
    component: ShowCakeComponent
  },
  {
    path: 'purchase/:id',
    component: CheckoutCakeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
