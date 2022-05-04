import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interfaces';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styles: [
    `
      .mr-1 {
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
      }
    `,
  ],
})
export class DetailComponent implements OnInit {
  constructor(
    private activateRoute: ActivatedRoute,
    private countryService: CountryService
  ) {}

  country!: Country;
  error: boolean = false;

  ngOnInit(): void {
    this.error = false;
    /* this.activateRoute.params.subscribe(({ id }) => {
      this.countryService.detailCountry(id).subscribe((country) => {
        console.log(country[0]);
      });
    }); */

    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => this.countryService.detailCountry(id)),
        tap(console.log)
      )
      .subscribe((country) => (this.country = country[0]));

    setTimeout(() => {
      if (!this.country && !this.error) this.error = true;
    }, 3000);
  }
}
