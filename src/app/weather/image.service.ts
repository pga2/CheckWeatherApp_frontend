import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ImageService {

  constructor(private http: HttpClient) { }

  downloadPDF(url: string) {
    return this.http.get(url, {
      responseType: 'blob'
    })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

}
