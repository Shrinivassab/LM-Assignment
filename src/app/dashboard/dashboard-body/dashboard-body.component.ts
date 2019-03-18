import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { Observable } from 'rxjs';
import { BikeSharingResponse } from '../../core/models/bike-sharing-response.model';
import { LoadBikeSharing } from '../../core/store/bike-sharing.actions';

@Component({
  selector: 'app-dashboard-body',
  templateUrl: './dashboard-body.component.html',
  styleUrls: ['./dashboard-body.component.scss']
})
export class DashboardBodyComponent implements OnInit {
  loadBikeData$: Observable<BikeSharingResponse>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new LoadBikeSharing());
    this.loadBikeData$ = this.store.pipe(
      select(state => state.bikeSharingState.bikeData)
    );
  }

}
