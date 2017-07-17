import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myDate'
})
export class MyDatePipe implements PipeTransform {

  transform(value: any, args?: string): any {
    args = args || 'ms';
    return new Date(value).getTime() + args;
  }

}
