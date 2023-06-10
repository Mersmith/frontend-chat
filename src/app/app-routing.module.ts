import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieConfirmationComponent } from './whatsapp/pages/movie-confirmation/movie-confirmation.component';
import { HappyHourAnnouncComponent } from './whatsapp/pages/happy-hour-announc/happy-hour-announc.component';
import { FlightConfirmationComponent } from './whatsapp/pages/flight-confirmation/flight-confirmation.component';

const routes: Routes = [
  {
    path: '',
    component: MovieConfirmationComponent,
    pathMatch: 'full'
  },
  {
    path: 'happy-hour',
    component: HappyHourAnnouncComponent
  },
  {
    path: 'flight',
    component: FlightConfirmationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
