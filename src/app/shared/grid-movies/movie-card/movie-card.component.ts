import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TruncatePipe } from '../../../pipes/truncate.pipe';

@Component({
  selector: 'movie-card',
  standalone: true,
  imports: [RouterLink, TruncatePipe],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent implements OnInit{
  @Input() adult!: boolean;
  @Input() backdropPath!: string;
  @Input() genre_ids!: number[];
  @Input() id!: number;
  @Input() original_language!: string;
  @Input() originalTitle!: string;
  @Input() sypnosis!: string;
  @Input() popularity!: number;
  @Input() posterPath!: string;
  @Input() releaseDate!: string;
  @Input() title!: String;
  @Input() video!: boolean;
  @Input() voteAverage!: number;
  @Input() voteCount!: number;
  tmdbBaseUrl = 'https://image.tmdb.org/t/p/w342'
    
  routeName: string = '';
  constructor(private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.routeName = this.activatedRoute.snapshot.url[this.activatedRoute.snapshot.url.length - 1].path;
  }
}
