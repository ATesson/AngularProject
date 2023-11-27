import { Pipe, PipeTransform } from '@angular/core';
import { ImgShare } from './models/img-share.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(images: ImgShare[], argument: string): unknown {
    return images.filter(i => i.title.includes(argument));
  }

}
