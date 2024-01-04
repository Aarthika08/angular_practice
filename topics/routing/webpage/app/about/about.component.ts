// // // about.component.ts

// // import { Component, NgZone } from '@angular/core';

// // @Component({
// //   selector: 'app-about',
// //   templateUrl: './about.component.html',
// //   styleUrls: ['./about.component.css']
// // })
// // export class AboutComponent implements OnInit {
// //   aboutImages: string[] = [
// //     'assets/about1.jpg',
// //     'assets/about2.jpg',
// //     'assets/about3.jpg',
// //   ];
// //   carouselImages = [
// //     { url: 'assets/slide1.jpg', alt: 'Slide 1' },
// //     { url: 'assets/slide2.jpg', alt: 'Slide 2' },
// //     { url: 'assets/slide3.jpg', alt: 'Slide 3' }
// //   ];
// //   currentSlide: number = 0;

// //   constructor(private zone: NgZone) {}

// //   ngOnInit() {
// //     this.startSlideShow();
// //   }

// //   startSlideShow() {
// //     setInterval(() => {
// //       console.log("i am aarthika")
// //       this.zone.run(() => {
// //         this.currentSlide = (this.currentSlide + 1) % this.aboutImages.length;
// //       });
// //     }, 3000); // Change slide every 3 seconds (adjust as needed)
// //   }
// // }


// // your.component.ts

// // import { Component } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
// import { SlideInterface } from './types/slide.interface';


// @Component({
//   selector: 'app-root',
//   templateUrl: './about.component.html',
//   styleUrls: ['./about.component.css']
// })

// export class AboutComponent {
 
// }
