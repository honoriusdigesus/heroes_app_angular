import {Component, Input, OnInit} from '@angular/core';
import {Heroes} from "../../../interfaces/hero.interface";

@Component({
  selector: 'heroes-card-hero',
  templateUrl: './card-hero.component.html',
  styleUrl: './card-hero.component.css'
})
export class CardHeroComponent implements OnInit {

  @Input() hero!:Heroes;

  ngOnInit(): void {
    if (!this.hero) throw Error('Hero is required');
  }

}
