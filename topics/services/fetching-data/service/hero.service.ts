// import { Injectable } from '@angular/core';
// import { BackendService } from './backend.service';
// import { Logger } from './logger.service';
// import { Hero } from './hero.model';

// @Injectable({
//   providedIn: 'root',
// })
// export class HeroService {
//   private heroes: Hero[] = [];

//   constructor(
//     private backend: BackendService,
//     private logger: Logger
//   ) {}

//   getHeroes() {
//     // Create an array of Hero instances to pass to the backend service
//     const heroInstances: Hero[] = [
//       { id: 1, name: 'Hero One' },
//       { id: 2, name: 'Hero Two' },
//       { id: 3, name: 'Hero Three' },
//       // Add more hero instances as needed
//     ];

//     this.backend.getAll(heroInstances).then((heroesArray: Hero[][]) => {
//       // Flatten the array of arrays to a single array
//       const heroes = ([] as Hero[]).concat(...heroesArray);

//       this.logger.log(`Fetched ${heroes.length} heroes.`);
//       this.heroes.push(...heroes); // fill cache
//     });

//     return this.heroes;
//   }
// }


import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Logger } from './logger.service';
import { Hero } from './hero.model';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroes: Hero[] = [];

  constructor(
    private backend: BackendService,
    private logger: Logger
  ) {}

  async getHeroes(): Promise<Hero[]> {
    try {
      const heroesArray: Hero[] = await this.backend.getAll();
      this.logger.log(`Fetched ${heroesArray.length} heroes.`);
      this.heroes.push(...heroesArray);
      return this.heroes;
    } catch (error) {
      console.error('Error fetching heroes:', error);
      return Promise.reject(error);
    }
  }
}
