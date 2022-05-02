import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interfaces';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styles: [
    `
      button {
        margin-right: 16px;
        margin-bottom: 16px;
      }
    `,
  ],
})
export class RegionComponent implements OnInit {
  constructor(private countryService: CountryService) {}

  regiones: string[] = ['africa', 'america', 'asia', 'europa', 'oceania'];
  regionActive: string = '';
  countries: Country[] = [];
  loading: boolean = false;
  error: boolean = false;

  ngOnInit(): void {}

  activarRegion(region: string) {
    if (region === this.regionActive) return;

    this.loading = true;
    this.error = false;
    this.regionActive = region;

    this.countryService
      .searchRegion(
        this.regionActive === 'europa' ? 'europe' : this.regionActive
      )
      .subscribe(
        (data) => (this.countries = data),
        (error) => {
          console.log(error);
          this.loading = false;
          this.error = true;
        },
        () => (this.loading = false)
      );
  }
}
