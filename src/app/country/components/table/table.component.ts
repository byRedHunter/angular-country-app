import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [
    `
      img {
        width: 30px;
      }
    `,
  ],
})
export class TableComponent {
  constructor() {}

  @Input() countries: Country[] = [];

  getCurrency(data: Object, symbol: boolean = false) {
    return symbol ? Object.values(data)[0].symbol : Object.values(data)[0].name;
  }
}
