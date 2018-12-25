import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KadGraphPage } from './kad-graph';

@NgModule({
  declarations: [
    KadGraphPage,
  ],
  imports: [
    IonicPageModule.forChild(KadGraphPage),
  ],
})
export class KadGraphPageModule {}
