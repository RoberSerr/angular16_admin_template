import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from '@shared/components/pages/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [
    CommonModule,
    BreadcrumbsComponent
  ],
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {

}
