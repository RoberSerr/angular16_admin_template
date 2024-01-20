import { Injectable } from '@angular/core';
import { appIcons } from '@shared/services/data/app.icons';

@Injectable({
  providedIn: 'root'
})
export class AppIconsService {

  constructor() { }

  getIcon(name: string) {
    for (let icon of appIcons) {
      if (icon.name == name) { return icon.icon }
    }
    throw new Error('error icono')
  }
  
}