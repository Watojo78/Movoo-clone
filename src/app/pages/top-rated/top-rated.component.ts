import { Component } from '@angular/core';
import { GridMoviesComponent } from '../../shared/grid-movies/grid-movies.component';
import { HeroBannerComponent } from '../../shared/hero-banner/hero-banner.component';

@Component({
  selector: 'top-rated',
  standalone: true,
  imports: [HeroBannerComponent, GridMoviesComponent],
  templateUrl: './top-rated.component.html',
  styleUrl: './top-rated.component.scss'
})
export class TopRatedComponent {

}
