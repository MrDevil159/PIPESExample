import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(array: any[], filterString: string, propName: string, strictMode: boolean = false): any {
    if (array.length === 0 || filterString.replace(/\s/g, '').length === 0) {
      return array;
    }
    return array.filter((item: any) => strictMode ? item[propName] === filterString : item[propName].includes(filterString));
  }

}
