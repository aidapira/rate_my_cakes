import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-buy-cake',
  templateUrl: './buy-cake.component.html',
  styleUrls: ['./buy-cake.component.css']
})
export class BuyCakeComponent implements OnInit {

  @Input() cake:any;

  constructor(
    private _router: Router,
    private _httpService: HttpService,
  ) { }

  ngOnInit() {
  }

  handlePurchase(cakeId) {
    console.log("let's go to checkout")
    this._router.navigate(['purchase/' + cakeId])
  }

}
