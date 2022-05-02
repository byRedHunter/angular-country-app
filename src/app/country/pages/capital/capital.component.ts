import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interfaces';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styles: [],
})
export class CapitalComponent {
  constructor(private countryService: CountryService) {}

  loading: boolean = false;
  termino: string = '';
  error: boolean = false;
  listCountries: Country[] = [];

  search(termino: string) {
    this.loading = true;
    this.error = false;
    this.termino = termino;

    this.countryService.searchCapital(this.termino).subscribe(
      (data) => {
        this.listCountries = data;
      },
      (error) => {
        this.error = true;
        this.listCountries = [];
      },
      () => {
        this.loading = false;
      }
    );
  }
}
