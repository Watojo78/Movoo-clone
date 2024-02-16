import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit: number, trail: string = '...'): string {
    if (value.length <= limit) {
      return value;
    }

    // Handle edge cases and prevent breaking HTML structure
    return value.substring(0, limit) + trail;
  }
}
