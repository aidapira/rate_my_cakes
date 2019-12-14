import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  

  constructor(private _http: HttpClient) { }
  getCakes() {
    const observable = this._http.get('/api/cakes');
    return observable;
  }
  createCakes(newCake) {
    const observable = this._http.post('/api/cakes', newCake);
    return observable;
  }
  getSingleCake(id) {
    const observable = this._http.get('/api/cakes/' + id);
    return observable;
  }
  createReview(cakeId, newReview) {
    const observable = this._http.post('/api/reviews/' + cakeId, newReview);
    return observable;
  }
  createOrder(cakeId, newOrder) {
    const observable = this._http.post('/api/orders/' + cakeId, newOrder)
    return observable;
  }
}
