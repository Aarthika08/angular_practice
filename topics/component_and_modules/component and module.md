# component

template + class + Metadata

(view)    (code)    (decorator)


**sample code**

>import { Component } from '@angular/core';
>
>
>@Component({
>
>
>  selector: 'app-root',                      //->custome html tag
>
>
>  templateUrl: './app.component.html',        //-> view
>
>
>  styleUrls: ['./app.component.css']          //->style
>
>
>})
>
>export class AppComponent {
>
>  title = 'angular-counter-app';               //property
>
>}
>

**command**

ng g c component_name

**after created**
1.import that component in module
2-declare it in declaration[]

different ways to specify the selector
1.as custom tag
2.as class
3.as attiribute

different ways to specify the template
1.with filename
2.template inline
3.template inline with maximum lines (backtik)

different ways to specify the style

1.with filename
2.style inline
3.style inline with maximum lines (backtik)

#module

module is like a container which contains many components 

**code**

>import { NgModule } from '@angular/core';
>
>
>import { BrowserModule } from '@angular/platform-browser';
>
>
>import{FormsModule} from '@angular/forms'
>
>
>import { AppRoutingModule } from './app-routing.module';
>
>
>import { AppComponent } from './app.component';
>
>import { TestComponent } from './test/test.component';
>
>@NgModule({
>
>
>declarations: [
>
>    AppComponent,
>
>    TestComponent
>
>  ],
>
>
>  imports: [
>
>
>    BrowserModule,
>
>    AppRoutingModule,FormsModule
>
>
>  ],
>
>
>  providers: [],
>
>
>
>  bootstrap: [AppComponent]})
>
>
>export class AppModule { }


