import { Component, OnInit } from '@angular/core';
import { GamesService } from './games.service';
import { Game } from './games.model';

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnInit {
  loadedGame: Game[]

  constructor(private gamesService: GamesService) { }

  ngOnInit() {
    this.loadedGame = this.gamesService.games;
  }

}
