import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  cakes = [];

  validationErrors = null;

  newCake = {
    cakeName: '',
    imgUrl: '',
    price: ''
  };

  constructor(
    private _router: Router,
    private _httpService: HttpService,
  ) { }

  ngOnInit() {
    this.allCakes();
  }

  allCakes() {
    this._httpService.getCakes()
      .subscribe((data: any) => {
        if (data.hasOwnProperty('errors')) {
          this.validationErrors = data.errors;
        }
        else {
          this.cakes = data.cakes;
          console.log(this.cakes);
        }
      })
  }

  handleSubmit() {
    this._httpService.createCakes(this.newCake)
      .subscribe((data: any) => {
        if (data.hasOwnProperty('errors')) {
          this.validationErrors = data.errors;
        }
        else {
          this.allCakes();
          this.newCake = {
            cakeName: '',
            imgUrl: '',
            price: ''
          };
          this._router.navigate(['/']);

        }
      })
  }
}
