#Routing in angular

In Angular, routing is a mechanism that allows you to navigate between different components in your application based on the URL.
It helps create a single-page application (SPA) experience by updating the content of the page without triggering a full page reload.

Procedure
**step1**
Generate the application
  >>ng new routing-app
  >>ng generate component first
  >>ng generate component second

**step2**
Import our newcomponents
>import {FirstComponent} from './first/first.component';
>  
>import {SecondComponent} from './second/second.component';

**step3**
Defining basic route

Set up a Routes array for your routes

The Angular CLI performs this step automatically.

content_copy
import { Routes } from '@angular/router';
export const routes: Routes = [];


**Define your routes in your Routes array.**
>const routes: Routes = [
>
> { path: 'first-component', component: FirstComponent },
>
> { path: 'second-component', component: SecondComponent },
>
>
>];

**step4**

Template
<h1>Angular Router App</h1>
<nav>
  <ul>
    <li><a routerLink="/first-component" routerLinkActive="active" ariaCurrentWhenActive="page">First Component</a></li>
    <li><a routerLink="/second-component" routerLinkActive="active" ariaCurrentWhenActive="page">Second Component</a></li>
  </ul>
</nav>
<!-- The routed views render in the <router-outlet>-->
<router-outlet></router-outlet>


****step5**
setup wildcard routeif needed 

>const routes: Routes = [
>
>  { path: 'first-component', component: FirstComponent },
>
>  { path: 'second-component', component: SecondComponent },
>
>  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
>
>];


**step6**
set up redirect

>const routes: Routes = [
>
>  { path: 'first-component', component: FirstComponent },
>
>  { path: 'second-component', component: SecondComponent },
>
>{ path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
>
>
>  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
>
>];

______________________________________________________________________________________________________________________________________________________

**sample code**

// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}




**router outlet**
<!-- app.component.html -->

<router-outlet></router-outlet>

**navigation link**

<!-- app.component.html or any other template file -->

<nav>
  <a routerLink="/home">Home</a>
  <a routerLink="/about">About</a>
  <a routerLink="/contact">Contact</a>
</nav>
