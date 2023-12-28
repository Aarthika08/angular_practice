
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AppComponent } from './app.component';
import { CounterComponent } from './counter.component';
import { CounterService } from './counter.service';

@NgModule({
  declarations: [CounterComponent],
  imports: [BrowserModule],
  providers: [CounterService],
  bootstrap: [CounterComponent],
})
export class AppModule {}
