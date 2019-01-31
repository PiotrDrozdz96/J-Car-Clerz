import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  MatButtonModule,
  MatMenuModule,
  MatCheckboxModule,
  MatSelectModule,
  MatOptionModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';

import { OrderComponent } from './booking/order/order.component';
import { OrderBarComponent } from './booking/order-bar/order-bar.component';
import { MeetComponent } from './booking/meet/meet.component';
import { BookingComponent } from './booking/booking.component';
import { Step1Component } from './booking/step1/step1.component';
import { Step2Component } from './booking/step2/step2.component';

import { CarFullComponent } from './car/car-full/car-full.component';

import { OrderService } from './services/order.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    OrderComponent,
    OrderBarComponent,
    MeetComponent,
    BookingComponent,
    Step1Component,
    Step2Component,
    CarFullComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    MatCheckboxModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'Booking', component: BookingComponent, children: [
          { path: 'Step1', component: Step1Component },
          { path: 'Step2', component: Step2Component }
      ]},
    ], { useHash: true })
  ],
  providers: [MatDatepickerModule, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
