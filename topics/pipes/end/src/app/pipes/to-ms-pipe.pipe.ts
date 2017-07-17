import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
  name: 'toMsPipe'
})
export class ToMsPipePipe implements PipeTransform {

  transform(value: any, postfix?: string, postfixVisible?: boolean): string {
    postfix = postfix || 'ms';
    postfixVisible = (postfixVisible !== undefined) ? postfixVisible : true;
    return new Date(value).getTime() + (postfixVisible ? ' '+postfix : '');
  }

}
