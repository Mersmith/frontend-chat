import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightConfirmationComponent } from './pages/flight-confirmation/flight-confirmation.component';
import { MovieConfirmationComponent } from './pages/movie-confirmation/movie-confirmation.component';
import { HappyHourAnnouncComponent } from './pages/happy-hour-announc/happy-hour-announc.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FlightConfirmationComponent,
    MovieConfirmationComponent,
    HappyHourAnnouncComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class WhatsappModule { }
