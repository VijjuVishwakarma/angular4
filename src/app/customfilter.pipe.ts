import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customfilter'
})
export class CustomfilterPipe implements PipeTransform {

  transform(items: string[], item: string): any {
    if(!item){
      return items;
    }
    return items.filter(it => {
      return it.toLowerCase().includes(item)
    })
  }

}
