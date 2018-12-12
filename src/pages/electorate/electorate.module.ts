import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ElectoratePage } from './electorate';

@NgModule({
  declarations: [
    ElectoratePage,
  ],
  imports: [
    IonicPageModule.forChild(ElectoratePage),
  ],
})
export class ElectoratePageModule {}
