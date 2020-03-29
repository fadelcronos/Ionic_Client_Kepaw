import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddGamesPageRoutingModule } from './add-games-routing.module';

import { AddGamesPage } from './add-games.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddGamesPageRoutingModule
  ],
  declarations: [AddGamesPage]
})
export class AddGamesPageModule {}
