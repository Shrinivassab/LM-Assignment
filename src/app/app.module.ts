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
    StoreModule.forRoot({bikeSharingState: bikeSharingReducer}),
    EffectsModule.forRoot([BikeSharingEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
