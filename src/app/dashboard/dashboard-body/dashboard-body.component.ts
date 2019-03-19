import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { AppState } from '../../app.state';
import { BikeSharingResponse, StationDetails } from '../../core/models/bike-sharing-response.model';
import { LoadBikeSharing } from '../../core/store/bike-sharing.actions';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-dashboard-body',
  templateUrl: './dashboard-body.component.html',
  styleUrls: ['./dashboard-body.component.scss']
})
export class DashboardBodyComponent implements OnInit {
  loadBikeData$: Observable<BikeSharingResponse>;
  stationDetails: StationDetails[] = [];
  sortOptions: SelectItem[] = [
    {label: 'Empty Slot', value: 'empty_slots'},
    {label: 'Free Bikes', value: 'free_bikes'},
    {label: 'Name', value: 'name'}
  ];
  sortKey: string;
  sortField: string;
  sortOrder: number;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.dispatch(new LoadBikeSharing());
    this.loadBikeData$ = this.store.pipe(
      select(state => state.bikeSharingState.bikeData),
      filter(result => Boolean(result))
    );
    this.getStationData(this.loadBikeData$);
  }

  getStationData(network) {
    network.subscribe((data) => {
      this.stationDetails = data.network.stations;
    });
  }

  onSortChange(event) {
    console.log(event);
    const value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

}
