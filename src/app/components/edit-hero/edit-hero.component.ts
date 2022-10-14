import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { SuperHero } from '../../models/super-hero';
import { SuperHeroService } from '../../services/super-hero.service';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit {
  @Input() hero?: SuperHero;
  @Output() heroesUpdated = new EventEmitter<SuperHero[]>();
  constructor(private superHeroService: SuperHeroService) { }

  ngOnInit(): void {
  }

  updateHero(hero: SuperHero) : void {
    this.superHeroService.updateSuperHero(hero).subscribe((data) => {
      this.heroesUpdated.emit(data);
    });
  }

  addHero(hero: SuperHero) : void {
    this.superHeroService.addSuperHero(hero).subscribe((data) => {
      this.heroesUpdated.emit(data);
    });
  }

  deleteHero(hero: SuperHero) : void {
    this.superHeroService.deleteSuperHero(hero.id ? hero.id : 0).subscribe((data) => {
      this.heroesUpdated.emit(data);
    });
  }

}
