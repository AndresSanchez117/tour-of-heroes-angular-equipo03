import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    var heroes = [
      { id: 11, name: 'Dr Nice', points: 1234 },
      { id: 12, name: 'Narco', points: 2345 },
      { id: 13, name: 'Bombasto', points: 3456 },
      { id: 14, name: 'Celeritas', points: 4567 },
      { id: 15, name: 'Magneta', points: 7890 },
      { id: 16, name: 'RubberMan', points: 8901 },
      { id: 17, name: 'Dynama', points: 9012 },
      { id: 18, name: 'Dr IQ', points: 4321 },
      { id: 19, name: 'Magma', points: 1235 },
      { id: 20, name: 'Tornado', points: 4562 }
    ];
    heroes = heroes.sort((h1, h2) => h2.points - h1.points)
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}