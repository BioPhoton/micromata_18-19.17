import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercasePipe'
})
export class UppercasePipePipe implements PipeTransform {

  transform(value: any): string {
    value = value + '';
    return value.toUpperCase();
  }

}
