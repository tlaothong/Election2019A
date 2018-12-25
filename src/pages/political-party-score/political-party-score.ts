import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as pbi from 'powerbi-client';
import { models, IEmbedConfiguration } from 'powerbi-client';
/**
 * Generated class for the PoliticalPartyScorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-political-party-score',
  templateUrl: 'political-party-score.html',
})
export class PoliticalPartyScorePage {
  data: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.navParams.get('data01');
    console.log("tokenid1");
    console.log(this.data);
  }

  ionViewDidEnter() {
    let accessToken = this.data;
    let embedUrl = 'https://app.powerbi.com/reportEmbed?reportId=8ea002b8-7f30-4bee-a56d-432acfb5739d&groupId=50ffda63-4985-4fdf-b052-c78cee9263ff';
    let embedReportId = '8ea002b8-7f30-4bee-a56d-432acfb5739d';
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

    //////////////////////////////////
 
  }

}
