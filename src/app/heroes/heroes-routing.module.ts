import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutPageComponent} from "./pages/layout-page/layout-page.component";
import {NewHeroPageComponent} from "./pages/new-hero-page/new-hero-page.component";
import {ListPageComponent} from "./pages/list-page/list-page.component";
import {HeroesPageComponent} from "./pages/heroes-page/heroes-page.component";
import {SearchPageComponent} from "./pages/search-page/search-page.component";

const routes: Routes = [
  {
    path:'',
    component: LayoutPageComponent,
    children:[
      {
        path: 'new-hero',
        component: NewHeroPageComponent
      },
      {
        path:'edit/:id',
        component: NewHeroPageComponent
      },
      {
        path:'list',
        component: ListPageComponent
      },
      {
        path: 'search',
        component: SearchPageComponent
      },
      {
        path:':id',
        component: HeroesPageComponent
      },
      {
        path:'**',
        redirectTo: 'list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
