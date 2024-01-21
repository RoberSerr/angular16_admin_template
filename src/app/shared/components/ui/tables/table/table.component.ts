import { CommonModule } from '@angular/common';
import { AsyncPipe, DecimalPipe } from '@angular/common';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../data/models/countriesModel';
import { CountryService } from '../services/tables.service';
import { NgbdSortableHeader, SortEvent } from '../directives/tables-sortable.directive';
import { FormsModule } from '@angular/forms';
import { NgbHighlight, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
	CommonModule,
	DecimalPipe, 
	FormsModule, 
	AsyncPipe, 
	NgbHighlight, 
	NgbdSortableHeader, 
	NgbPaginationModule
],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [CountryService, DecimalPipe],
})
export class TableComponent {

	countries$: Observable<Country[]>;
	total$: Observable<number>;

	@ViewChildren(NgbdSortableHeader) headers!: QueryList<NgbdSortableHeader>;

	constructor(public service: CountryService) {
		this.countries$ = service.countries$;
		this.total$ = service.total$;
	}

	onSort({ column, direction }: SortEvent) {
		// resetting other headers
		this.headers.forEach((header) => {
			if (header.sortable !== column) {
				header.direction = '';
			}
		});

		this.service.sortColumn = column;
		this.service.sortDirection = direction;
	}
}