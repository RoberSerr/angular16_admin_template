import { Injectable, signal } from '@angular/core';
import { SidebarMenuItemModel } from '@core/models/sidebar-menu.model';
import { Observable, of } from 'rxjs';

import * as dataRaw from '../../../../../data/sidebar-menu.data.json'

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  sidebarMenuModel$: Observable<SidebarMenuItemModel[]> = of([])
  
  public sidebarItemMenu = signal<SidebarMenuItemModel | undefined>(undefined)
  public sidebarMenu = signal<SidebarMenuItemModel[] | undefined>(undefined)

  constructor() {
    const { data }: any = ( dataRaw as any ).default
    this.sidebarMenuModel$ = of( data )
  }

}
