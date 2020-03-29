import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from '../games.service';
import { Game } from '../games.model';

@Component({
  selector: 'app-games-detail',
  templateUrl: './games-detail.page.html',
  styleUrls: ['./games-detail.page.scss'],
})
export class GamesDetailPage implements OnInit {
  loadGame: Game;
  constructor(private actRoute: ActivatedRoute,
    private gamesService: GamesService,
    private router: Router) { }

    ngOnInit() {
      this.actRoute.paramMap.subscribe(paramMap => {
        if(!paramMap.has('tabsId')){
          this.router.navigate(['/tabs']);
          return;
        }
  
        const tabsId = paramMap.get('tabsId');
        this.loadGame = this.gamesService.getGame(tabsId);
      });
    }

}
