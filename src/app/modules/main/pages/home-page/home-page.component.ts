import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { FooterComponent } from '@shared/components/home/footer/footer.component';
import { SidenavComponent } from '@shared/components/home/sidenav/sidenav.component';
import { TopnavComponent } from '@shared/components/home/topnav/topnav.component';

import { Subscription } from 'rxjs';
import { HomePageService } from './services/home-page.service';



@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FooterComponent,
    SidenavComponent,
    TopnavComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, OnDestroy {

  listObservers$: Subscription[] = [];
  isCollapsedSidenav = true

  constructor (
    private _HomePageService: HomePageService
  ) { }

  ngOnInit(): void {
    const observer1$: Subscription = this._HomePageService.callback.subscribe(
      (response: boolean) => {
        this.isCollapsedSidenav = response
      }
    )
    this.listObservers$ = [ observer1$ ]
  }
  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe());
  }

}
