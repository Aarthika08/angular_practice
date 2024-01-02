// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive'; // Import the HighlightDirective
import { AttributesExamplesComponent } from './attributes-examples/attributes-examples.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { DropdownComponent } from './dropdown.component';
@NgModule({
  declarations: [
    AppComponent,AttributesExamplesComponent,
    HighlightDirective, // Include the HighlightDirective in the declarations array
    DropdownComponent
  ],
  imports: [BrowserModule,FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
