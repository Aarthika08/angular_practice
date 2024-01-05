// import { Component } from '@angular/core';
// import { DataService } from './data.service';
// // import { Heroservice } from './hero.service';
// import { HeroService } from './service/hero.service';

// @Component({
//   selector: 'app-root',
//   template: `<p>{{ message }}</p>`,
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'services-example';
// message:string;

// constructor( private dataservice: DataService, private heroService: HeroService)
// {
//   this.message=this.dataservice.getData();
//   this.dataservice.log("This is log message");
//   this.dataservice.error("This is error message");
//   this.dataservice.warn("This is warn message");

//    // Call getHeroes method from HeroService
//    const heroes = this.heroService.getHeroes();
//    console.log('Heroes:', heroes);
// }

// }
// import { Component } from '@angular/core';
// import { DataService } from './data.service';
// // import { HeroService } from './hero.service';
// import { HeroService } from './service/hero.service';
// @Component({
//   selector: 'app-root',
//   template: '<p>{{ message }}</p>',
// })
// export class AppComponent {
//   message: string;

//   constructor(
//     private dataService: DataService,
//     private heroService: HeroService
//   ) {
//     this.message = this.dataService.getData();

//     // Call log, error, and warn methods from DataService
//     this.dataService.log('This is a log message from DataService.');
//     this.dataService.error('This is an error message from DataService.');
//     this.dataService.warn('This is a warning message from DataService.');

//     // Call getHeroes method from HeroService
//     const heroes = this.heroService.getHeroes();
//     console.log('Heroes:', heroes);
//   }
// }



import { Component, OnInit } from '@angular/core';
 import { HeroService } from './service/hero.service';
 import { Hero } from './service/hero.model';

 @Component({
   selector: 'app-root',
  //  template: '<p>{{ message }}</p>
  //   <h1>{{ message }}</h1>
  //   <ul>
  //     <li *ngFor="let hero of heroes">{{ hero.name }}</li>
  //   </ul>',
  template: `
    <h1>{{ message }}</h1>
    <ul>
      <li *ngFor="let hero of heroes">{{ hero.name }}</li>
    </ul>
  `,
 })
 export class AppComponent implements OnInit {
   message: string = '';
   heroes: Hero[] = [];

   constructor(private heroService: HeroService) {}
 
   async ngOnInit() {
     try {
      //  const heroes = await this.heroService.getHeroes();
      //  console.log('Fetched Heroes:', heroes);
      //  this.message = `Fetched ${heroes.length} heroes.`;
      this.heroes = await this.heroService.getHeroes();
      this.message = `Fetched ${this.heroes.length} heroes.`;
      //  this.message = `Fetched ${heroes.length} heroes.`;
     } catch (error) {
       console.error('Error in ngOnInit:', error);
     }
   }
 }
 