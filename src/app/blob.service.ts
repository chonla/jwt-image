import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlobService {

  constructor(private http: HttpClient) { }

  getImage(url: string): Observable<string> {
    const observable$ = new Observable<string>(observer => {
      const reader = new FileReader();
      this.http.get(url, {
        responseType: 'blob',
        headers: {
          'Authorization': 'Bearer <My-Token>'
        }
      })
        .subscribe(data => {
          reader.readAsDataURL(data);
          reader.onloadend = () => {
            observer.next(reader.result as string);
            observer.complete();
          }
        });
    });
    return observable$;
  }
}
