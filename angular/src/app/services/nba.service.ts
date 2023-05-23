import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Nba } from '../interfaces/nba.model';

@Injectable({ providedIn: 'root' })
export class NbaService {

  private readonly localUrl = 'http://127.0.0.1:8000'

  constructor(private http: HttpClient) { }


  /**
   * Get the list of NBA players
   */
  getPlayers() {
    return this.http.get<Nba[]>(`${this.localUrl}/nbaplayers/players/`);
  }

  /**
   * Get the detail of a NBA player
   * @param id
   */

  getDetail(id: string) {
    return this.http.get<Nba>(`${this.localUrl}/nbaplayers/players/${id}`);
   }

  /**
   * Update a NBA player
   * @param player
   */

  updatePlayer(id: string, player: Nba) {
    return this.http.put<Nba>(`${this.localUrl}/nbaplayers/players/${id}`, player);
  }



}
