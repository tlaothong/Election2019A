import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PoliticalPartyScorePage } from './political-party-score';

@NgModule({
  declarations: [
    PoliticalPartyScorePage,
  ],
  imports: [
    IonicPageModule.forChild(PoliticalPartyScorePage),
  ],
})
export class PoliticalPartyScorePageModule {}
