import { Component } from '@angular/core';
import { GridMoviesComponent } from '../../shared/grid-movies/grid-movies.component';
import { HeroBannerComponent } from '../../shared/hero-banner/hero-banner.component';

@Component({
  selector: 'upcoming',
  standalone: true,
  imports: [HeroBannerComponent, GridMoviesComponent],
  templateUrl: './upcoming.component.html',
  styleUrl: './upcoming.component.scss'
})
export class UpcomingComponent {

}
