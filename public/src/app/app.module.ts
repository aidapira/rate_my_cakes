import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleCakeComponent } from './single-cake/single-cake.component';
import { HttpService } from './http.service';
import { ShowCakeComponent } from './show-cake/show-cake.component';
import { CakeReviewComponent } from './cake-review/cake-review.component';
import { ShowReviewComponent } from './show-review/show-review.component';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BuyCakeComponent } from './buy-cake/buy-cake.component';
import { CheckoutCakeComponent } from './checkout-cake/checkout-cake.component';
import { AdminComponent } from './admin/admin.component';
import { PopUpComponent } from './pop-up/pop-up.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleCakeComponent,
    ShowCakeComponent,
    CakeReviewComponent,
    ShowReviewComponent,
    BuyCakeComponent,
    CheckoutCakeComponent,
    AdminComponent,
    PopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ScrollDispatchModule,
    ScrollingModule,
    BrowserAnimationsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
