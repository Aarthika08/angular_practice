// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class BackendService {
//   getAll<T>(resource: T): Promise<T[]> {
//     // Your implementation to fetch data from the backend
//     return Promise.resolve([]); // Placeholder for demonstration
//   }
// }


import { Injectable } from '@angular/core';
import { Hero } from './hero.model';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  // Adjust the implementation of getAll based on the actual backend behavior
  getAll(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulating a delay to mimic an asynchronous operation
      setTimeout(() => {
        const heroes: Hero[] = [
          { id: 1, name: 'Hero One' },
          { id: 2, name: 'Hero Two' },
          { id: 3, name: 'Hero Three' },
        ];
        resolve(heroes);
      }, 1000);
    });
  }
}
