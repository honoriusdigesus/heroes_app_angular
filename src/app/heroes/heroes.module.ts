import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesPageComponent } from './pages/heroes-page/heroes-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewHeroPageComponent } from './pages/new-hero-page/new-hero-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import {MaterialModule} from "../material/material.module";
import { CardHeroComponent } from './pages/components/card-hero/card-hero.component';
import { HeroImagePipe } from './pipes/hero-image.pipe';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    HeroesPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewHeroPageComponent,
    SearchPageComponent,
    CardHeroComponent,
    HeroImagePipe
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class HeroesModule { }
