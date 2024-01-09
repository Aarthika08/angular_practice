// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppComponent } from './app.component';
import { ShoppingComponent } from './shopping.component';
import { cartReducer } from './cart.reducer';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';



@NgModule({
  declarations: [AppComponent, ShoppingComponent],
  imports: [BrowserModule, FormsModule,  
      StoreModule.forRoot({ cart: cartReducer }),
  ], // Add FormsModule to the imports array
  bootstrap: [AppComponent],
})
export class AppModule {}
