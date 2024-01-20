import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from '@shared/components/pages/breadcrumbs/breadcrumbs.component';
import { CardsComponent } from '@shared/components/ui/cards/cards.component';
import { ChartsComponent } from '@shared/components/ui/charts/charts.component';
import { TablesComponent } from '@shared/components/ui/tables/tables.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    BreadcrumbsComponent,
    CardsComponent,
    ChartsComponent,
    TablesComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
}
