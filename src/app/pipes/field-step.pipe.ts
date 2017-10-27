import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fieldStep'
})
export class FieldStepPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    /*
    for ( let i=0; i<value.length; i++ )
      if ( value[i].step != args )
        value.splice(i, 1);
    return value;
    */
    if (!value || !args) {
      return value;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return value.filter(value => value.step == args);
  }

}
