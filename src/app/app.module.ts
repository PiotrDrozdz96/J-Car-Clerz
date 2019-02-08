import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  MatButtonModule,
  MatMenuModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatInputModule,
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
import { FooterComponent } from './footer/footer.component';

import { SliderCarsComponent } from './slider/slider-cars/slider-cars.component';

import { ListComponent } from './informations/list/list.component';
import { RentComponent } from './informations/rent/rent.component';
import { RentRequirementsComponent } from './informations/rent-requirements/rent-requirements.component';

import { OrderComponent } from './booking/order/order.component';
import { OrderBarComponent } from './booking/order-bar/order-bar.component';
import { MeetComponent } from './booking/meet/meet.component';
import { BookingComponent } from './booking/booking.component';
import { Step1Component } from './booking/step1/step1.component';
import { Step2Component } from './booking/step2/step2.component';
import { Step3Component } from './booking/step3/step3.component';

import { CarFullComponent } from './car/car-full/car-full.component';
import { CarPriceComponent } from './car/car-price/car-price.component';
import { CarSummaryComponent } from './car/car-summary/car-summary.component';
import { CarListComponent } from './car/car-list/car-list.component';
import { CarComponent } from './car/car.component';

import { ReservationService } from './services/reservation.service';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    OrderComponent,
    OrderBarComponent,
    MeetComponent,
    BookingComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    CarFullComponent,
    CarPriceComponent,
    CarSummaryComponent,
    CarListComponent,
    CarComponent,
    ListComponent,
    RentComponent,
    RentRequirementsComponent,
    SliderCarsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatMenuModule,
    MatCheckboxModule,
    MatSelectModule,
    MatInputModule,
    MatOptionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'Booking/Step3', component: Step3Component},
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
  providers: [MatDatepickerModule, ReservationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
