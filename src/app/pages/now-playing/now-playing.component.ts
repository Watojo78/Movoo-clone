import { Component } from '@angular/core';
import { HeroBannerComponent } from '../../shared/hero-banner/hero-banner.component';
import { GridMoviesComponent } from '../../shared/grid-movies/grid-movies.component';

@Component({
  selector: 'now-playing',
  standalone: true,
  imports: [HeroBannerComponent, GridMoviesComponent],
  templateUrl: './now-playing.component.html',
  styleUrl: './now-playing.component.scss'
})
export class NowPlayingComponent {

}
