import { Component } from '@angular/core';
import { GridMoviesComponent } from '../../shared/grid-movies/grid-movies.component';
import { HeroBannerComponent } from '../../shared/hero-banner/hero-banner.component';

@Component({
  selector: 'popular',
  standalone: true,
  imports: [HeroBannerComponent, GridMoviesComponent],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.scss'
})
export class PopularComponent {

}
