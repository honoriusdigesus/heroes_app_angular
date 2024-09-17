import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";
import {Heroes} from "../../interfaces/hero.interface";
import {HeroesServicesService} from "../../services/heroes.services.service";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {
  public searchInput = new FormControl('');
  public heroes:Heroes[] = [];
  public selectedHero?:Heroes;

  searchHeroes() {
    const value = this.searchInput.value || '';
    console.log(value);
    this.heroesService.getSuggestions(value.trim())
      .subscribe(heroes => this.heroes = heroes);
  }

  onSelectedOption(event:MatAutocompleteSelectedEvent){
    if(!event.option.value){
      this.heroes = [];
      return;
    }
    const hero:Heroes = event.option.value;
    this.searchInput.setValue(hero.superhero);
    this.selectedHero=hero;
    console.log(hero);
  }

  constructor(private heroesService: HeroesServicesService) { }

}
