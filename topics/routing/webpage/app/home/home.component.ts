import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images: string[] = [
    '/assets/slide1.jpg',
    '/assets/slide2.jpg',
    '/assets/slide3.jpg'
  ];
  

  currentSlide: number = 0;

  ngOnInit() {
    console.log('ngOnInit called');

    this.startSlideShow();
  }

  startSlideShow() {
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.images.length;
    }, 3000); // Change slide every 3 seconds (adjust as needed)
  }

}
