// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { AboutComponent } from '../about.component';


// @NgModule({
//   declarations: [AboutComponent],
//   imports: [
//     CommonModule
//   ],
//   exports:[AboutComponent]
// })
// export class ImagesliderModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import { ImageSliderComponent } from './components/imageSlider/imageSlider.component';
import {ImageSliderComponent} from './components/imageslider/imageslider.component';

@NgModule({
  imports: [CommonModule],
  exports: [ImageSliderComponent],
  declarations: [ImageSliderComponent],
})
export class ImageSliderModule {}