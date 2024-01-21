import { Component, DestroyRef, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { appIcons } from '@shared/services/data/app.icons';

import { SidebarMenuItemModel } from '@core/models/sidebar-menu.model';

import { SidenavService } from './services/sidenav.service';
import { Subscription } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { destroySuscribe } from '@core/utils/destroySuscribe';

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
export class SidenavComponent implements OnInit {

  private _router = inject(Router)
  private _sidenavService = inject(SidenavService)
  destroySuscribe = destroySuscribe()

  menuSidebar: SidebarMenuItemModel[] = []

  ngOnInit(): void {
    this._sidenavService.sidebarMenuModel$
      .pipe(this.destroySuscribe())
      .subscribe(
        (response: any) => {
          this.menuSidebar = response
        }
      )
  }

  getIcon(name: string) {
    for (let icon of appIcons) {
      if (icon.name == name) { return icon.icon }
    }
    throw new Error('error icono')
  }

  goTo(ruta: string[]): void {
    this._router.navigate(ruta)
  }

}
