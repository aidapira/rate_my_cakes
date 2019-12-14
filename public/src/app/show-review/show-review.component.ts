import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-review',
  templateUrl: './show-review.component.html',
  styleUrls: ['./show-review.component.css']
})
export class ShowReviewComponent implements OnInit {

  @Input() cakeReviewed ;
  @Input() avgRating: any;

  sum:any = '';
  
  constructor(
    ) { }
    
    ngOnInit() {
      this.sum = 0;
      
      for(var i=0;i<this.cakeReviewed.reviews.length;i++) {
        this.sum += this.cakeReviewed.reviews[i].rating;
      }
      this.avgRating = this.sum/this.cakeReviewed.reviews.length;

    }
    

}
