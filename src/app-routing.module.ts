import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './app/shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './app/shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './app/shared/pages/contact-page/contact-page.component';

const routes:Routes=[
  //{
    //path:'',
   // component:HomePageComponent
  //},

  {
    path:'about',
    component:AboutPageComponent
  },

  {
    path:'contact',
    component:ContactPageComponent
  },

  {
    path:'countries',
    loadChildren:()=> import('./app/countries/countries.module').then(m=>m.CountriesModule)
  },

  {
    path:'**',
    redirectTo:'countries'
  }
]

@NgModule({
  imports:[
RouterModule.forRoot(routes),

  ],

  exports:[
    RouterModule
  ]

})
export class AppRoutingModule { }
