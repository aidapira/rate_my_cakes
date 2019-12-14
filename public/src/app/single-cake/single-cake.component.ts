import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-single-cake',
  templateUrl: './single-cake.component.html',
  styleUrls: ['./single-cake.component.css']
})
export class SingleCakeComponent implements OnInit {

  cakes: any = [];

  selectedCake = null;

  constructor(
    private _httpService: HttpService,
  ) { }

  ngOnInit() {
    this._httpService.getCakes()
      .subscribe((data: any) => {
        this.cakes = data.cakes;
      })
  }

  selectCake(cake) {
    this.selectedCake = cake;
  }


  





}
