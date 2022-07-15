import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class UpperPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value);
    
    const res={};
    Object.keys(value).map(key => (res[key] = value[key].toUpperCase));
    return res;
  }
}
