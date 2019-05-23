import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArray'
})
export class FiltroArrayPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (value.lengh === 0 || args === undefined){
      return value;
    }
    let filer = args.toLocaleLowerCase();
    return value.filter(
      v => v.toLowerCase().indexOf(filer) != -1
    );
  }

}
