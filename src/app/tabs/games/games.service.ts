import { Injectable } from '@angular/core';
import { Game } from './games.model';  

@Injectable({
  providedIn: 'root'
})

export class GamesService{

    private game: Game[] = [
        new Game(
            'g1',
            'PUBG Mobile',
            'PUBG Mobile is a...',
            './assets/img/img1.jpg',
            'FPS'
          ),
        new Game(
            'g2',
            "Mobile Legends: Bang - Bang",
            'Mobile Legends: Bang - Bang is a...',
            './assets/img/img2.jpg',
            'MOBA'
          ),
        new Game(
            'g3',
            'DOTA 2',
            'DOTA 2 is a...',
            './assets/img/img3.jpg',
            'MOBA'
          )
        ];
        
    get games(){
        return [...this.game]
    }

    getGame(gameId: string){
      return {...this.game.find(gem => {
        return gem.id === gameId;
      })};
    }
  //   getPlace(tabsId: string){
  //     return {...this.place.find(places => {
  //       return places.id === tabsId;
  //     })};
  // }
        
}