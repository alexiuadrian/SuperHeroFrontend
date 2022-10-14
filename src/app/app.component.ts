import { Component } from '@angular/core';
import { SuperHero } from './models/super-hero';
import { SuperHeroService } from './services/super-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SuperHero.UI';
  heroes: SuperHero[] = [];
  selectedHero?: SuperHero;

  constructor(private superHeroService: SuperHeroService) {}

  ngOnInit() : void {
    this.superHeroService.getSuperHeros().subscribe((data) => {
      this.heroes = data;
      console.log(this.heroes);
    });
  }

  updateHeroesList(heroes: SuperHero[]) : void {
    this.heroes = heroes;
  }

  onSelect(hero: SuperHero) : void {
    this.selectedHero = hero;
  }

  initNewHero() : void {
    this.selectedHero = new SuperHero();
  }

  editHero(hero: SuperHero) : void {
    this.selectedHero = hero;
  }

}
