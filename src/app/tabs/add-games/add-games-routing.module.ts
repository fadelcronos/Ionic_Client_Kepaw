import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddGamesPage } from './add-games.page';

const routes: Routes = [
  {
    path: '',
    component: AddGamesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddGamesPageRoutingModule {}
