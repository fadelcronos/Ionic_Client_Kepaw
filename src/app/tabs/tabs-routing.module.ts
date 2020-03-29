import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
      path: 'tabs',
      component: TabsPage,
      children:[
          {
              path: 'game',
              children: [
                  {
                      path: '',
                      loadChildren: () => import('./games/games.module').then(m => m.GamesPageModule)
                  },
                  {
                    path: 'game-detail',
                    loadChildren: () => import('./games/games.module').then(m => m.GamesPageModule)
                  },
              ]
          },{
              path: 'addgame',
              children: [
                  {
                      path: '',
                      loadChildren: () => import('./add-games/add-games.module').then(m => m.AddGamesPageModule)
                  },
                  // {
                  //     path: 'regis',
                  //     loadChildren: () => import('./account/registration/registration.module').then(m => m.RegistrationPageModule)
                  // },
              ]
          },
          {
              path: '',
              redirectTo: '/tabs/tabs/game',
              pathMatch: 'full'
          }
      ]
  },
  {
      path: '',
      redirectTo: '/tabs/tabs/game',
      pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
