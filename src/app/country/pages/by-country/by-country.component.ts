import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interfaces';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [],
})
export class ByCountryComponent {
  constructor(private countryService: CountryService) {}

  termino: string = '';
  error: boolean = false;
  listCountries: Country[] = [];

  search(termino: string) {
    this.error = false;
    this.termino = termino;

    this.countryService.searchCountry(this.termino).subscribe(
      (data) => {
        this.listCountries = data;
      },
      (error) => {
        this.error = true;
        this.listCountries = [];
      }
    );
  }

  sugerencias(termino: string) {
    this.error = false;
  }
}
