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
    let embedUrl = 'https://app.powerbi.com/reportEmbed?reportId=a0b0e38a-9b59-462d-ad73-26c31fc333be&groupId=45f95249-7ae8-4335-899b-d66de3334065';
    let embedReportId = 'a0b0e38a-9b59-462d-ad73-26c31fc333be';
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
