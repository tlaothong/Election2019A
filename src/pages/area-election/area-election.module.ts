import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AreaElectionPage } from './area-election';

@NgModule({
  declarations: [
    AreaElectionPage,
  ],
  imports: [
    IonicPageModule.forChild(AreaElectionPage),
  ],
})
export class AreaElectionPageModule {}
