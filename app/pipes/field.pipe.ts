import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'field'
})
export class FieldPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const array = [];
    for ( let i = 0; i < value.length; i++ ) {
      if ( value.step === args ) {
        array.push(value);
      }
    }
    return value;
  }

}
