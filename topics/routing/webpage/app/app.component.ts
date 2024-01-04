import { Component } from '@angular/core';
import { SlideInterface } from './about/types/slide.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-example';
  slides: SlideInterface[] = [
    { url: '/assets/about1.jpg', alt: 'Slide 1' },
    { url: '/assets/about2.jpg', alt: 'Slide 2' },
    { url: '/assets/about3.jpg', alt: 'Slide 3' },
    { url: '/assets/card1.jpg', alt: 'Slide 4' },
    { url: '/assets/card2.jpg', alt: 'Slide 5' },
    { url: '/assets/image-1.jpeg', alt: 'beach' },
    { url: '/assets/image-2.jpeg', alt: 'boat' }
    
  ];

}
