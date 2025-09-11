import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toSortObjectAttributesAlphabetically',
    standalone: false
})
export class ToSortObjectAttributesAlphabeticallyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
