// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HelloComponent } from './hello.component';

@NgModule({
  declarations: [HelloComponent],
  imports: [BrowserModule, FormsModule], // Include FormsModule
  bootstrap: [HelloComponent],
})
export class AppModule {}
