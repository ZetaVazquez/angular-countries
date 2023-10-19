import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit{

public country?: Country;

//////////////////////////////////////////////////////////////////////////



  constructor (
    private activatedRoute:ActivatedRoute,
    private countriesService:CountriesService,
    private router:Router,
    ) {}


  ngOnInit(): void {              //REFACTORIZADO: SWITCHMAP (OPERADOR DE CREACIÓN SUPERIOR)
    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.countriesService.searchCountryByAlpaCode( id )),
    )
    .subscribe( country => {
      if ( !country ) return this.router.navigateByUrl('');
      return this.country = country;
    });


        // if(!country){
        //   return this.router.navigateByUrl('');
        // }else{
        //   console.log({country})
        // }
        // return;




     //Otra manera sin meter coutriesService en el juego:
    //.subscribe(({id})=>{

    //this.countriesService.searchCountryByAlpaCode(id)
   // .subscribe(country=>{
   //   console.log({country})
   //   });

   // });



    //empezó asi,por los params:
    //.subscribe((params:Params)=>{
    //  console.log(params['id'])
    //});
  }

}
