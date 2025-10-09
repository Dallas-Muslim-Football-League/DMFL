import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(array: any, fields: string): any[] {
    if (!Array.isArray(array) || !fields) return array;
    const sortFields = fields.split(',').map(f => f.trim());
    return array.slice().sort((a, b) => {
      for (const field of sortFields) {
        const aValue = field.split('.').reduce((obj, key) => obj && obj[key], a) ?? '';
        const bValue = field.split('.').reduce((obj, key) => obj && obj[key], b) ?? '';
        const compare = aValue.localeCompare(bValue);
        if (compare !== 0) return compare;
      }
      return 0;
    });
  }
}
