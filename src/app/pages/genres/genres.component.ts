import { Component } from '@angular/core';
import { GridMoviesComponent } from '../../shared/grid-movies/grid-movies.component';
import { HeroBannerComponent } from '../../shared/hero-banner/hero-banner.component';

@Component({
  selector: 'genres',
  standalone: true,
  imports: [HeroBannerComponent, GridMoviesComponent],
  templateUrl: './genres.component.html',
  styleUrl: './genres.component.scss'
})
export class GenresComponent {

}
