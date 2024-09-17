import {Component, OnInit} from '@angular/core';
import {HeroesServicesService} from "../../services/heroes.services.service";
import {ActivatedRoute, Router} from "@angular/router";
import {delay, switchMap} from "rxjs";
import {Heroes} from "../../interfaces/hero.interface";

@Component({
  selector: 'app-heroes-page',
  templateUrl: './heroes-page.component.html',
  styleUrl: './heroes-page.component.css'
})
export class HeroesPageComponent implements OnInit {

  public hero?:Heroes;

  constructor(
    private heroesService:HeroesServicesService,
    private activatedRouter: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.activatedRouter.params.pipe(
      delay(3000),
      switchMap(({id})=>this.heroesService.getHeroById(id))
    ).subscribe( hero =>{
      if (!hero) return this.router.navigateByUrl('/heroes/list');
      this.hero = hero;
      console.log(hero);
      return;
    })
    }

  goBack(){
    this.router.navigateByUrl('/heroes/list');
  }
}
