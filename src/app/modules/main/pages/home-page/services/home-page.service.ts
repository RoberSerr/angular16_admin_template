import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HomePageService {

  brandName: string = 'RsR Admin'

  isCollapsedSidenav: boolean = true

  callback:EventEmitter<any> = new EventEmitter<any>
  
  constructor() { }

}
