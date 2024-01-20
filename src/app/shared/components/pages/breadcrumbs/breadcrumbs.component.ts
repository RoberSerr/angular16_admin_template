import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsService } from '@shared/components/pages/breadcrumbs/services/breadcrumbs.service';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  
  
  infoPage = {
    title: 'title',
    description: 'description',
    breadcrumbs: [{
      title: '',
      router: ['','']
    }]
  }

  constructor(
    private _breadcrumbsService: BreadcrumbsService
  ) { }
  
  ngOnDestroy(): void { }

  ngOnInit(): void {
    this.infoPage = this._breadcrumbsService.getPageInfo()
  }

}
