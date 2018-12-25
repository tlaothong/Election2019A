import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as pbi from 'powerbi-client';
import { models, IEmbedConfiguration } from 'powerbi-client';

/**
 * Generated class for the PartyGraphPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-party-graph',
  templateUrl: 'party-graph.html',
})
export class PartyGraphPage {

  data: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.navParams.get('data03');
    console.log("token");
    console.log(this.data);
  }

  ionViewDidEnter() {
    let accessToken = this.data;
    let embedUrl = 'https://app.powerbi.com/reportEmbed?reportId=084d1e71-9dee-46d4-ac8c-7b30f5bdb7dc&groupId=50ffda63-4985-4fdf-b052-c78cee9263ff';
    let embedReportId = '084d1e71-9dee-46d4-ac8c-7b30f5bdb7dc';
    let config: IEmbedConfiguration = {
      type: 'report',
      tokenType: models.TokenType.Embed,
      accessToken: accessToken,
      embedUrl: embedUrl,
      id: embedReportId,
      permissions: models.Permissions.All,
      settings: {
        filterPaneEnabled: false,
        navContentPaneEnabled: false,
        layoutType: models.LayoutType.MobilePortrait,
        customLayout: {
          pageSize: {
            type: models.PageSizeType.Widescreen,
          },
          displayOption: models.DisplayOption.FitToPage,
          pagesLayout: {
          }
        }
      }
    };
    let reportContainer = <HTMLElement>document.getElementById('reportContainer');
    let powerbi = new pbi.service.Service(pbi.factories.hpmFactory, pbi.factories.wpmpFactory, pbi.factories.routerFactory);
    let report = powerbi.embed(reportContainer, config);
    report.off("loaded");

  }
}
