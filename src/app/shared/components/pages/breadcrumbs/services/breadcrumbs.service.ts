import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as dataRaw from '../../../../../data/sidebar-menu.data.json'
import { ItemMenuBreadcrumbs, SidebarMenuItemModel } from '@core/models/sidebar-menu.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {

  infoPage = {
    title: 'title',
    description: 'description',
    breadcrumbs: []
  }

  constructor(
    private _router: Router
  ) { }

  getPageInfo() {
    const { data }: any = (dataRaw as any).default
    const route = this._router.url.slice(1)

    for (let item of data) {
      for (let item1 of item.level_1) {
        if ( item1.link ) {
          if (item1.link.route == route) {
            this.setInfoPage(item1.ui.title, item1.ui.description, item1.ui.breadcrumbs)
          }
        }
        if ( item1.level_2 ) {
          for (let item2 of item1.level_2.items) {
            if (item2.link) {
              if (item2.link.route == route) {
                this.setInfoPage(item2.ui.title, item2.ui.description, item2.ui.breadcrumbs)
              }
            }
            if ( item2.level_3 ) {
              for ( let item3 of item2.level_3.items ) {
                if (item3.link) {
                  if (item3.link.route == route) {
                    this.setInfoPage(item3.ui.title, item3.ui.description, item3.ui.breadcrumbs)
                  }
                }
              }
            }
          }
        }
      }
    }
    return this.infoPage
  }

  setInfoPage(title: string, description: string, breadcrumbs: []): void {
    this.infoPage.title = title
    this.infoPage.description = description
    this.infoPage.breadcrumbs = breadcrumbs
  }

}
