import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  popUpOpen = false;
  @Input() isOpen = false;

  constructor() { }

  ngOnInit() {
  }

  // openPopUp() {
  //   this.popUpOpen = true;
  // }

}
