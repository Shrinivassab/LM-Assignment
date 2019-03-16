import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardTopBarComponent } from './dashboard/dashboard-top-bar/dashboard-top-bar.component';
import { DashboardBodyComponent } from './dashboard/dashboard-body/dashboard-body.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardTopBarComponent,
    DashboardBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
