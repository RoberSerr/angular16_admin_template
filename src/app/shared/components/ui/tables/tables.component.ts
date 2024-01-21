import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [CommonModule, TableComponent],
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent {

}
