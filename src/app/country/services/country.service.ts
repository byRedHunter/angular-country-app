import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private _uri = 'https://restcountries.com/v3.1';
  private _params = new HttpParams().set(
    'fields',
    'name,currencies,population,cca2,flags,capital'
  );

  constructor(private http: HttpClient) {}

  searchCountry(termino: string): Observable<Country[]> {
    const url = `${this._uri}/name/${termino}`;

    return this.http.get<Country[]>(url, { params: this._params });
  }

  searchCapital(termino: string): Observable<Country[]> {
    const url = `${this._uri}/capital/${termino}`;

    return this.http.get<Country[]>(url, { params: this._params });
  }

  detailCountry(id: string): Observable<Country[]> {
    const url = `${this._uri}/alpha/${id}`;

    return this.http.get<Country[]>(url);
  }

  searchRegion(region: string): Observable<Country[]> {
    const url = `${this._uri}/region/${region}`;

    return this.http.get<Country[]>(url, { params: this._params });
  }
}
