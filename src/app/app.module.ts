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
  MatNativeDateModule,
  MatListModule,
  MatIconModule,
  MatIcon
} from '@angular/material';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';

import { ListComponent } from './informations/list/list.component';
import { RentComponent } from './informations/rent/rent.component';

import { OrderComponent } from './booking/order/order.component';
import { OrderBarComponent } from './booking/order-bar/order-bar.component';
import { MeetComponent } from './booking/meet/meet.component';
import { BookingComponent } from './booking/booking.component';
import { Step1Component } from './booking/step1/step1.component';
import { Step2Component } from './booking/step2/step2.component';

import { CarFullComponent } from './car/car-full/car-full.component';
import { CarPriceComponent } from './car/car-price/car-price.component';
import { CarListComponent } from './car/car-list/car-list.component';
import { CarComponent } from './car/car.component';

import { OrderService } from './services/order.service';
import { RentRequirementsComponent } from './informations/rent-requirements/rent-requirements.component';

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
    CarFullComponent,
    CarPriceComponent,
    CarListComponent,
    CarComponent,
    ListComponent,
    RentComponent,
    RentRequirementsComponent,
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
    MatIconModule,
    MatListModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'Booking', component: BookingComponent, children: [
          { path: 'Step1', component: Step1Component },
          { path: 'Step2', component: Step2Component }
      ]},
      { path: 'wynajem', component: RentComponent},
      { path: 'warunki-wynajmu', component: RentRequirementsComponent},
      { path: 'flota', component: CarListComponent},
      { path: 'car/:car', component: CarComponent}
    ], { useHash: true })
  ],
  providers: [MatDatepickerModule, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
