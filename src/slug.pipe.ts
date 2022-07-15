import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class SlugPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if(typeof value != 'string')
    {
      return value;
    }
    return value
      .replace(/[éè]/g, 'e')
      .replace(/^A-Za-z0-9 -/g, '')
      .replace(/\s+/ ,'-')
      .replace(/-+/, '-')
      .toLocaleLowerCase();
  }
}
