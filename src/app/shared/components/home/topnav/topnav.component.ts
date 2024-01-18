import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { appIcons } from '@shared/services/data/app.icons';
import { HomePageService } from '@modules/main/pages/home-page/services/home-page.service';


@Component({
  selector: 'app-topnav',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit, OnDestroy {

  constructor(
    private _router: Router,
    private _HomePageService: HomePageService
  ) { }

  ngOnDestroy(): void {

  }
  ngOnInit(): void {

  }

  showSidebar(): void {
    this._HomePageService.isCollapsedSidenav = !this._HomePageService.isCollapsedSidenav
    this._HomePageService.callback.emit(
      this._HomePageService.isCollapsedSidenav
    )
  }

  getIcon(name: string) {
    for (let icon of appIcons) {
      if (icon.name == name) { return icon.icon }
    }
    throw new Error('error icono')
  }

}
