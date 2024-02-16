import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDk2N2M2YmM3ZmU3OGNiOTRjNTAwYThmNTdlNmNhNSIsInN1YiI6IjYyOWI4YzliNTUwN2U5MTJjNzk0ODAxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PMvZS7yJMi8LjvWpOC3S_fwIRFnwEqbNMrXJpW8AfQY';
const headers = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Authorization', `Bearer ${token}`);

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  apiUrl = 'https://api.themoviedb.org/3/movie';
  apiUrl2 = 'https://api.themoviedb.org/3';
  apiKey = 'ad967c6bc7fe78cb94c500a8f57e6ca5';
  genres!: any[];

  constructor(private http: HttpClient) { }

  getNowPlayingMovies(): Observable<any> {
    const url = this.apiUrl + '/now_playing';
    return this.http.get(url, { headers: headers });
  }

  getPopularMovies(): Observable<any> {
    const url = this.apiUrl + '/popular';
    return this.http.get(url, { headers: headers });
  }

  getTopRatedMovies(): Observable<any> {
    const url = this.apiUrl + '/top_rated';
    return this.http.get(url, { headers: headers });
  }

  getUpcomingMovies(): Observable<any> {
    const url = this.apiUrl + '/upcoming';
    return this.http.get(url, { headers: headers });
  }

  getMoviesGenres(): Observable<any[]> {
    const url = this.apiUrl2 + '/genre/movie/list';
    return this.http.get<any>(url, { headers: headers })
      .pipe(
        map(response => {
          this.genres = response.genres;
          return response.genres; // Return fetched genres
        })
      )
  }

  getGenreName(genreId: number): string[] {
    const genre = this.genres?.find((g) => g.id === genreId);
    return genre ? [genre.name] : ['Unknown']; // Handle not found scenarios
  }

  getMovie(movie_id: number): Observable<any> {
    const url = this.apiUrl + `/${movie_id}`;
    return this.http.get(url, { headers: headers });
  }
}
