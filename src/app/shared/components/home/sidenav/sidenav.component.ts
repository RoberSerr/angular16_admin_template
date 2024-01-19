import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { appIcons } from '@shared/services/data/app.icons';

import { SidebarMenuItemModel } from '@core/models/sidebar-menu.model';

import { SidenavService } from './services/sidenav.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    NgbCollapseModule
  ],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit, OnDestroy {

  menuSidebar: SidebarMenuItemModel[] = []
  listObservers$: Subscription[] = [];
  
  constructor(
    private _router: Router,
    private _sidebarService: SidenavService
  ) {}
  
  ngOnInit(): void {
    const observer1$ = this._sidebarService.sidebaMenuModel$
      .subscribe(
        ( response: any ) => {
          this.menuSidebar = response
        }
      )
      this.listObservers$ = [ observer1$ ]
  }
  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe());
  }

  getIcon(name: string) {
    for (let icon of appIcons) {
      if (icon.name == name) { return icon.icon }
    }
    throw new Error('error icono')
  }
}
