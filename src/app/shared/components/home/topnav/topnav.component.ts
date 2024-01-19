import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { appIcons } from '@shared/services/data/app.icons';

import { HomePageService } from '@modules/main/pages/home-page/services/home-page.service';


@Component({
  selector: 'app-topnav',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgbDropdownModule
  ],
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit, OnDestroy {

  brandName = '';

  constructor(
    private _router: Router,
    private _HomePageService: HomePageService
  ) { }

  ngOnDestroy(): void {

  }
  ngOnInit(): void {
    this.brandName = this._HomePageService.brandName
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
