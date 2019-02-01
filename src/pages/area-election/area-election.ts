import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import * as pbi from 'powerbi-client';
import { models, IEmbedConfiguration } from 'powerbi-client';
import { GlobalVaraible } from '../../app/model';

/**
 * Generated class for the AreaElectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-area-election',
  templateUrl: 'area-election.html',
})
export class AreaElectionPage {
  [x: string]: any;

  areaPolitical: string;
  urlPowerBi: string;
  token: any = {};
  data: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
    this.data = this.navParams.get('tokenid');
    this.areaPolitical = this.navParams.get('nameArea');
    
    console.log("token");
    console.log(this.data);
  }

  ionViewDidEnter() {
    // this.areaPolitical = this.navParams.data._areaPolitical;
    console.log("this.areaPolitical");
    console.log(this.areaPolitical);
    let accessToken = this.data;
    let embedUrl = 'https://app.powerbi.com/reportEmbed?reportId='+GlobalVaraible.reportid+'&groupId='+GlobalVaraible.groupid;
    let embedReportId = GlobalVaraible.reportid;
    const basicFilter: pbi.models.IBasicFilter = {
      $schema: "http://powerbi.com/product/schema#basic",
      target: {
        table: "Data",
        column: "NameKad",

      },
      operator: "In",
      values: [this.areaPolitical],
      filterType: pbi.models.FilterType.BasicFilter
    }

    let config: IEmbedConfiguration = {
      type: 'report',
      tokenType: models.TokenType.Embed,
      accessToken: accessToken,
      embedUrl: embedUrl,
      id: embedReportId,
      permissions: models.Permissions.All,
      filters: [basicFilter],
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
    // report.on("loaded", function () {
    //   console.log("Loaded");
    // });
  }

  // back(){
  //   // this.navCtrl.pop();
  //   this.viewCtrl.dismiss();
  // }
}



