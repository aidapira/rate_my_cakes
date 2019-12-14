import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-checkout-cake',
  templateUrl: './checkout-cake.component.html',
  styleUrls: ['./checkout-cake.component.css']
})
export class CheckoutCakeComponent implements OnInit {

  personOrdering = null;
  @Input() popUpOpen = false;

  @Input() cake: any;

  newOrder: any = {
    quantity: '',
    deliverydate: '',
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipcode: ''
  }

  errors: string[] = [];


  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit() {
    console.log("HI welcome to checkout")
  }


  handleCheckout() {
    this._route.params.subscribe((params: Params) => {
    this._httpService.createOrder(params.id, this.newOrder)
      .subscribe((data:any) => {
        if (data.hasOwnProperty('errors')) {
          // console.log("error")
          this.errors = [data.errors.message];
        }
        else {
          this.personOrdering = data.cake;
          this.personOrdering.orders = data.cake.orders;
          console.log(data.cake)
          console.log('****')
          console.log(this.personOrdering)
        }
      })

    });

  }

  openPopUp() {
    this.popUpOpen = true;
  }

}
