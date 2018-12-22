import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as pbi from 'powerbi-client';
import { models, IEmbedConfiguration } from 'powerbi-client';
import { LayoutType, ViewMode, BackgroundType } from 'powerbi-models';

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

  areaPolitical: string;
  urlPowerBi: string;
  token: any = {};
  data: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.navParams.get('tokenid');
    console.log("token");
    console.log(this.data);
  }

  ionViewDidEnter() {
    this.areaPolitical = this.navParams.data._areaPolitical;
    let accessToken = this.data;
    let embedUrl = 'https://app.powerbi.com/reportEmbed?reportId=e00e412c-d883-4fdb-a6eb-9bb3f699c1e2&groupId=45f95249-7ae8-4335-899b-d66de3334065';
    let embedReportId = 'e00e412c-d883-4fdb-a6eb-9bb3f699c1e2';
    const basicFilter: pbi.models.IBasicFilter = {
      $schema: "http://powerbi.com/product/schema#basic",
      target: {
        table: "ScoreArea",
        column: "NameKad",

      },
      operator: "In",
      values: [this.areaPolitical],
      filterType: pbi.models.FilterType.BasicFilter
    }
    // const basicFilter2: pbi.models.IBasicFilter = {
    //   $schema: "http://powerbi.com/product/schema#basic",
    //   target: {
    //     table: "ScoreArea",
    //     column: "Party",

    //   },
    //   operator: "In",
    //   values: ["เพื่อไทย"],
    //   filterType: pbi.models.FilterType.BasicFilter
    // }

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
        layoutType: models.LayoutType.Custom,
        customLayout: {
          pageSize: {
            type: models.PageSizeType.Custom

          },
          displayOption: models.DisplayOption.FitToWidth,
          pagesLayout: {
            "ReportSection1": {
              defaultLayout: {
                displayState: {
                  mode: models.VisualContainerDisplayMode.Hidden
                }
              },
              visualsLayout: {
                "VisualContainer1": {
                  x: 0,
                  y: 0,
                  z: 0,
                  width: 592,
                  height: 400,
                  displayState: {
                    mode: models.VisualContainerDisplayMode.Visible
                  }
                },
                "VisualContainer2": {
                  displayState: {
                    mode: models.VisualContainerDisplayMode.Visible
                  }
                },
              }
            }
          }
        }
      }
      // settings: {
      //   filterPaneEnabled: false,
      //   navContentPaneEnabled: false,
      //   layoutType: models.LayoutType.Custom,
      //   //
      //   customLayout: {  
      //     pageSize: {
      //       type: models.PageSizeType.Custom,
      //       width: 500,
      //       height: 1200
      //     },        
      //     displayOption: models.DisplayOption.ActualSize,
      //     pagesLayout: {
      //       "ReportSection1" : {
      //         // defaultLayout: {
      //         //   displayState: {
      //         //     mode: models.VisualContainerDisplayMode.Hidden
      //         //   }
      //         // },

      //         visualsLayout: {
      //           "VisualContainer1": {
      //             width: 0,
      //             height: 0,
      //             displayState: {
      //               mode: models.VisualContainerDisplayMode.Visible
      //             }
      //           }
      //         }
      //       }
      //     }
      //     //
      //   }
      // }
    };
    let reportContainer = <HTMLElement>document.getElementById('reportContainer');
    let powerbi = new pbi.service.Service(pbi.factories.hpmFactory, pbi.factories.wpmpFactory, pbi.factories.routerFactory);
    let report = powerbi.embed(reportContainer, config);
    report.off("loaded");
    report.on("loaded", function () {
      console.log("Loaded");
    });
  }
}


