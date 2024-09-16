import {Component, OnInit} from '@angular/core';
import {Heroes} from "../../interfaces/hero.interface";
import {HeroesServicesService} from "../../services/heroes.services.service";

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})
export class ListPageComponent implements OnInit {

  public heroes:Heroes[] = [];

  constructor(private heroesService:HeroesServicesService){}

  ngOnInit(): void {
    this.heroesService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
    }
}
