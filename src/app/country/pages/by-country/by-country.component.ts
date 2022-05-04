import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interfaces';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
      .nav-link {
        padding-left: 0;
        padding-right: 0;
      }
    `,
  ],
})
export class ByCountryComponent {
  constructor(private countryService: CountryService) {}

  termino: string = '';
  error: boolean = false;
  listCountries: Country[] = [];
  countriesSugested: Country[] = [];
  showSugested: boolean = false;

  search(termino: string) {
    this.showSugested = false;
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
    this.termino = termino;
    this.showSugested = true;

    this.countryService.searchCountry(termino).subscribe(
      (result) => (this.countriesSugested = result.splice(0, 3)),
      (error) => (this.countriesSugested = [])
    );
  }

  searchSugested(termino: string) {
    this.search(termino);
  }
}
