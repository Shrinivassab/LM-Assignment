import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BikeSharingResponse } from '../models/bike-sharing-response.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BikeSharingService {
  endPoint = '/blue-bikes';

  constructor(private http: HttpClient) {
  }
  getCityBikeData = () => this.http.get<BikeSharingResponse>(environment.webApi + this.endPoint);

}
