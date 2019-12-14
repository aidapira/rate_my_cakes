import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-cake-review',
  templateUrl: './cake-review.component.html',
  styleUrls: ['./cake-review.component.css']
})
export class CakeReviewComponent implements OnInit {

  cakeToReview = null;


  @Input() cake: any;

  newReview: any = {
    rating: 5,
    comment: ''
  }

  avgRating:any = 5;
  errors: string[] = [];



  constructor(
    private _httpService: HttpService,
  ) { }

  ngOnInit() {
  }

  handleRate(cakeId) {
    console.log(cakeId)
    this._httpService.createReview(cakeId, this.newReview)
    .subscribe((data:any) => {
      console.log(data)
      if (data.hasOwnProperty('errors')) {
        this.errors = [data.errors.message];
        console.log(this.errors)
      }
      else {
          this.cakeToReview = this.cake;
          this.cakeToReview.reviews = data.cake.reviews;
          var sum = 0;
          for(var i=0;i<this.cakeToReview.reviews.length;i++) {
            sum += this.cakeToReview.reviews[i].rating;
          }
          this.avgRating = sum/this.cakeToReview.reviews.length;
          this.newReview.rating = 5;
          this.newReview.comment = '';
        }

      })
  }


}
