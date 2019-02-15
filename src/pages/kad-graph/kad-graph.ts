import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as pbi from 'powerbi-client';
import { models, IEmbedConfiguration } from 'powerbi-client';

/**
 * Generated class for the KadGraphPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kad-graph',
  templateUrl: 'kad-graph.html',
})
export class KadGraphPage {
  headerType: string;
  data: any={};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.navParams.get('data02');
    console.log("token");
    console.log(this.data);
  }

  ionViewDidEnter() {
    // let accessToken = this.data;
    // let embedUrl = 'https://app.powerbi.com/reportEmbed?reportId=c699f062-a605-481e-9370-6f56d60b6659&groupId=50ffda63-4985-4fdf-b052-c78cee9263ff';
    // let embedReportId = 'c699f062-a605-481e-9370-6f56d60b6659';
    // let config: IEmbedConfiguration = {
    //   type: 'report',
    //   tokenType: models.TokenType.Embed,
    //   accessToken: accessToken,
    //   embedUrl: embedUrl,
    //   id: embedReportId,
    //   permissions: models.Permissions.All,
    //   settings: {
    //     filterPaneEnabled: false,
    //     navContentPaneEnabled: false,
    //     layoutType: models.LayoutType.MobilePortrait,
    //     customLayout: {
    //       pageSize: {
    //         type: models.PageSizeType.Widescreen,
    //       },
    //       displayOption: models.DisplayOption.FitToPage,
    //       pagesLayout: {
    //       }
    //     }
    //   }
    // };
    // let reportContainer = <HTMLElement>document.getElementById('reportContainer');
    // let powerbi = new pbi.service.Service(pbi.factories.hpmFactory, pbi.factories.wpmpFactory, pbi.factories.routerFactory);
    // let report = powerbi.embed(reportContainer, config);
    // report.off("loaded");

  }

}
