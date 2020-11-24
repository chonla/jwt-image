import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { BlobService } from './blob.service';

@Pipe({
  name: 'authImage'
})
export class AuthImagePipe implements PipeTransform {

  constructor(private blobService: BlobService) { }

  transform(path: string): Observable<string> {
    return this.blobService.getImage(path);
  }

}
