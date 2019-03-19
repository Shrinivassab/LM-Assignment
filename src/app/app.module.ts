import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardTopBarComponent } from './dashboard/dashboard-top-bar/dashboard-top-bar.component';
import { DashboardBodyComponent } from './dashboard/dashboard-body/dashboard-body.component';
import { StoreModule } from '@ngrx/store';
import { bikeSharingReducer } from './core/store/bike-sharing.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BikeSharingEffects } from './core/store/bike-sharing.effects';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    DashboardTopBarComponent,
    DashboardBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CardModule,
    DataViewModule,
    DropdownModule,
    FormsModule,
    PanelModule,
    InputTextModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({bikeSharingState: bikeSharingReducer}),
    EffectsModule.forRoot([BikeSharingEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
