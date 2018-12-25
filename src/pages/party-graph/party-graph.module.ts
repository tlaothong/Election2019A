import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PartyGraphPage } from './party-graph';

@NgModule({
  declarations: [
    PartyGraphPage,
  ],
  imports: [
    IonicPageModule.forChild(PartyGraphPage),
  ],
})
export class PartyGraphPageModule {}
