import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlobService } from './blob.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public imgSrc$: Observable<string>;

  constructor(private blobService: BlobService) {
    this.imgSrc$ = new Observable<string>();
  }

  ngOnInit() {
    this.imgSrc$ = this.blobService.getImage('https://chonla.github.io/jwt-image/assets/1024px-180819_블랙핑크_팬싸인회_코엑스_라이브프라자_리사.jpg')
  }
}
