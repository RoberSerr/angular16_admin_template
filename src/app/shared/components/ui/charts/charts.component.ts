import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppIconsService } from '@shared/services/app-icons.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartLineComponent } from './chart-line/chart-line.component';
import { ChartBarComponent } from './chart-bar/chart-bar.component';
import { ChartAreaComponent } from './chart-area/chart-area.component';
import { ChartPieComponent } from './chart-pie/chart-pie.component';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    ChartLineComponent,
    ChartBarComponent,
    ChartAreaComponent,
    ChartPieComponent
  ],
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {

  constructor(
    private _appIconsService: AppIconsService
  ) {}

  getIcon( name: string )  {
    return this._appIconsService.getIcon(name)
  }

}
