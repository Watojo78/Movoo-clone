import { Component, Input, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { GenreNamePipe } from '../../pipes/genre-name.pipe';

@Component({
  selector: 'hero-banner',
  standalone: true,
  imports: [RouterLink, MatButton, GenreNamePipe],
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.scss'
})
export class HeroBannerComponent implements OnInit{
  @Input() movie: any;
  tmdbBaseUrl = 'https://image.tmdb.org/t/p/original'

  routeName: string = '';
  constructor(private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.routeName = this.activatedRoute.snapshot.url[this.activatedRoute.snapshot.url.length - 1].path;
  }
}
