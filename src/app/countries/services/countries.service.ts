import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,tap,map } from 'rxjs';

import { Country } from '../interfaces/country';
@Injectable({providedIn: 'root'})
export class CountriesService {

private apiUrl:string='https://restcountries.com/v3.1'


  constructor(private http: HttpClient) { }

  searchCapital(term:string): Observable<Country[]> {
    const url=`${this.apiUrl}/capital/${term}`;
    return this.http.get<Country[]>(url)
   // Observable tiene un método llamado pipe(). Pipe contiene tap,map... todo esto den libreria rxjs
    .pipe(
      tap(countries =>console.log("Pasó por el tap de observable ",countries)),
      map(countries =>[] )
    );


  }

}




