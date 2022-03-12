import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
      this.heroes = this.heroes.sort((h1, h2) => h2.points - h1.points)
  }

  add(name: string, pointsString: string): void {
    var points = Number(pointsString)
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name, points } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
    this.heroes = this.heroes.sort((h1, h2) => h2.points - h1.points)
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

}