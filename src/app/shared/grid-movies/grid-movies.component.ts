import { Component, OnInit } from '@angular/core';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { NgFor } from '@angular/common';
import { HeroBannerComponent } from '../hero-banner/hero-banner.component';

@Component({
    selector: 'grid-movies',
    standalone: true,
    templateUrl: './grid-movies.component.html',
    styleUrl: './grid-movies.component.scss',
    imports: [MovieCardComponent, HeroBannerComponent, NgFor],
})
export class GridMoviesComponent implements OnInit {
    id!: number;
    movies!: any[];
    genres!: any[];
    routeName: string = '';
    heroMovie: any;

    constructor(
        private tmdbService: MovieService,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.routeName = this.activatedRoute.snapshot.url[this.activatedRoute.snapshot.url.length - 1].path;
        this.movieList();
        this.genresMovies();
    }

    private movieList() {
        if(this.routeName=="popular"){
            this.tmdbService.getPopularMovies().subscribe({
                next: (res: any) => {
                    this.heroMovie = res.results[0];
                    this.movies = res.results.slice(1);
                },
                error: (err) => {
                    console.log(
                        'Une erreur est survenue lors de chargement de Now Playing',
                        err
                    );
                },
            });
        }else if(this.routeName=="upcoming"){
            this.tmdbService.getUpcomingMovies().subscribe({
                next: (res: any) => {
                    this.heroMovie = res.results[0];
                    this.movies = res.results.slice(1);
                },
                error: (err) => {
                    console.log(
                        'Une erreur est survenue lors de chargement de Now Playing',
                        err
                    );
                },
            });
        }else if(this.routeName=="top-rated"){
            this.tmdbService.getTopRatedMovies().subscribe({
                next: (res: any) => {
                    this.heroMovie = res.results[0];
                    this.movies = res.results.slice(1);
                },
                error: (err) => {
                    console.log(
                        'Une erreur est survenue lors de chargement de Now Playing',
                        err
                    );
                },
            });
        }else{
            this.tmdbService.getNowPlayingMovies().subscribe({
                next: (res: any) => {
                    this.heroMovie = res.results[0];
                    this.movies = res.results.slice(1);
                },
                error: (err) => {
                    console.log(
                        'Une erreur est survenue lors de chargement de Now Playing',
                        err
                    );
                },
            });
        }
    }

    private genresMovies() {
        this.tmdbService.getMoviesGenres().subscribe({
            next: (res: any) => {
                this.genres = res.results;
                console.log('Genres Movies List:=>', res);
            },
            error: (err) => {
                console.log(
                    'Une erreur est survenue lors de chargement des genres',
                    err
                );
            },
        });
    }
}
