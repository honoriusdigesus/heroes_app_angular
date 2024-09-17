import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {Heroes} from "../interfaces/hero.interface";
import {environment} from "../../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class HeroesServicesService {
  private baseUrl:string = environment.baseUrl;

  constructor(private http:HttpClient) { }

  getHeroes():Observable<Heroes[]>{
    return this.http.get<Heroes[]>(`${this.baseUrl}/heroes`);
  }

  getHeroById(id:string):Observable<Heroes | undefined>{
    return this.http.get<Heroes>(`${this.baseUrl}/heroes/${id}`)
      .pipe(
        catchError(error => of(undefined))
      );
  }

  getSuggestions(query:string):Observable<Heroes[]>{
    return this.http.get<Heroes[]>(`${this.baseUrl}/heroes?q=${query}&_limit=6`);
  }
}
