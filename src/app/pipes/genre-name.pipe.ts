import { Pipe, PipeTransform } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Pipe({
  name: 'genreName',
  standalone: true
})
export class GenreNamePipe implements PipeTransform {

  constructor(private genreService: MovieService) {}

  transform(genreIds: number[], separator = ', '): string {
    if (!genreIds || genreIds.length === 0) {
      return '';
    }

    return genreIds.map(id => this.genreService.getGenreName(id))
      .flat() // Flatten the array of arrays
      .join(separator);
  }

}
