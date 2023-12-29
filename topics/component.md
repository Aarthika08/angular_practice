#component

template + class + Metadata
(view)    (code)    (decorator)


**sample code**

>import { Component } from '@angular/core';
>@Component({
>  selector: 'app-root',                      //->custome html tag
>  templateUrl: './app.component.html',        //-> view
>  styleUrls: ['./app.component.css']          //->style
>})
>export class AppComponent {
>  title = 'angular-counter-app';               //property
>}
>

**command**

ng g c component_name

