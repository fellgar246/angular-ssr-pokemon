import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PokeAPIResponse, SimplePokemon } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  private http = inject(HttpClient);

  public loadPage(page: number): Observable<SimplePokemon[]> {
    if(page !== 0) {
      --page;
    }

    page = Math.max(0, page);
    return this.http.get<PokeAPIResponse>(
      `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${page * 20}&limit=20`
    ).pipe(
      map((response) => {
        const simplePokemons:SimplePokemon[] = response.results.map((pokemon) => ({
          id: pokemon.url.split('/').at(-2) ?? '',
          name: pokemon.name,
        }));
        return simplePokemons;
      })
    )
  }


}