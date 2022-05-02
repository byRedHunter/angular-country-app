import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private _uri = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  searchCountry(termino: string): Observable<Country[]> {
    const url = `${this._uri}/name/${termino}`;

    return this.http.get<Country[]>(url);
  }

  searchCapital(termino: string): Observable<Country[]> {
    const url = `${this._uri}/capital/${termino}`;

    return this.http.get<Country[]>(url);
  }

  detailCountry(id: string): Observable<Country[]> {
    const url = `${this._uri}/alpha/${id}`;

    return this.http.get<Country[]>(url);
  }
}
