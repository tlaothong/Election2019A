import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as pbi from 'powerbi-client';
import { models, IEmbedConfiguration } from 'powerbi-client';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidEnter() {
    this.areaPolitical = this.navParams.data._areaPolitical;
    let accessToken = 'H4sIAAAAAAAEACWWxxKs2BFE_-VtUQQeGkXMAmi892aH994zoX9Xj7Svxb2ZdbLy7z9m8vRTkv_5959uJhW0BFUml3FdmUsrstHw5XEfTLfoTRRbn5rPKXBMP_MVH881KLsmkVer1sZfOcQQLXsHz1pZI3DtGKlUgPEsNGQamiS4VH9yhwGNjlCtMJtcJkxsHdC5tz0lG4DxjtjLJj0cfxkmc47Hb9nNyvd5dS9TgE6p0sJIOSxZcJgvyoDFdlw_PWqulnGmLkWcDyc2ZOK1CWMFpHJvBOsMB9jFV59kIbWoAmoSESZKiThepvAqRD16WX6-kDOcsu9u7S9sQEuOBgtoHpkG9pLBWPOH0R6if_xRXvK5qO0m5_zcrVCArNeTvNGeRzo62TvQqzzNVZl6GvuqL-PCtkW4NtdvpYBe7OO74SDknDDvwMg0HT57ItYmFqJr8cCZTFN-uZekDHXSWWzOTCDanb27o3vNGwP4_c3aPcanvj4BMCk5oevwomsOVHpVOlgir6SbI9dooTf3QHgi9JKfDIM9Acdb_oSDOJKXLAsDdZ1IyCXLaS8prQ47hTM6aBor9IgKzSomqLXqnurGHIzRoTZsR-edzyKIS9TtoO3g-xWl8qqoIniGQkjlMR1epT8IzknP9tkSb-pl2iIVl3mb_vMJCTqQrwCqypS-Pi5l4mBIskrfqGJ8r00OgMXF0NQ5jqFdSNVU6npbuvP4WDplmx1Y4zCav14RehS-FOJ6hFx3jAxyGXyRYZL4sGW3Ro0Jk127TPDl0cgU5urnUI1bhLfyYzlGNuDMR1zmJ3WWFcCYTdYDy4DDHsRJn76U6v7mAhYt4uzYK6xA20HxbEj1r80aRjYiccrjJ-jB0iRNK9jmMBQ8rghXPNL06XPRgR336NWJ_R1QaYQhCTyNL2Pb29aorVh5gwU0elnu0-KYOh_ntMuIYMTdL4Sx26gEdr5bMlPRi2CKkim45USrMZNwfKAR2KRJKGjsbydWTjo72uA0mvtzAK9lktGTbBQR2FGPtJzIG0o-otQTn0TxNrAXXsQyg3B2rUjQB-qiFY__JOtwaJkLKAizlsZ92GEgLVabDmvmcJVx6-GYKGHKm2upncca1LAAVyhj9CAjkF-p2R7puSt0hnbGAgGRIyvUUkVrn8hv4WI_Nkad4t10zHse7FTdDDCAnQPPszaoBMkymn3Ysk9VUh1iGebA7tBzWPUYSEw6EDv-WimQs288VHAObZ75g6vr7SKa5oLWGJeh7HYI8Ah9UwTGzXwpQ3pGLnHVAaGRrWcVcGog7jNf38djYc1sKGWy8dNOKMSkY87uw1XyoodmJyFPHEUZt2ad4fILAb1JDe8lKAiNQ1fmw6RjHiRcdc08WdSIRdURfnQOHu1GtHFMaeSttlL07eQ73NMnIil3lAjy5LwIYG51c4uVuLzzQjdlSCndvGu6ZqS-RE2h1u6yVWTDRazvmDef9xBRFAUjiXbJwuam7cgX6kiHdPKfNldzN8OlA_Jb8O0rTmlWPlfwZcDHW9MpbUPI4RMisc_VP_6NrvxKrsgRr1N_owbtK5Awr1Rk5yLPdMj2padwfOtxG-_3h9d_t7mm79btNgwvLyeaAOZx3fnMVslWamc7wHSwWmRV4V6ntTgxDbaEGCRssuXkFxs-oML9CcGRMPLz4yeVvwYRidJFBktsa6fcjYV6-JjfypCfdL_vY_uu-QVE3g1BkbI8tQXJKKA-CSU3zM2ysIMFA6ZYjuPhQe0Ss9OFLTCbXIi3db03HtBPgwCias1-jEHanYKcnt_TPvNRpUBm8HraSEASNNf1Q7blJ41QJ7O2frgHacnHkMZTUCZvptXcqyW1WOvSzdM6NjjyxcJWOQGA3IaDlmQaPKZfHRscMmPUyPd34wLHu2Dp-uUzRaKeLxV6hTsMIRVIgGLCmEBzMWSRokOJrYF5d5QM1j04-fApITeEXTicndhH8Ytw_Xbg75TMZE1Xv9PZhTZ3HrFdusQSCeeZoEny5YWX2pMMPqre7FLnDpUqT8s2tfrcHXlTW9NENsyiK_OSU8IyvGZbXIsdyAqyZV72hhp-zSfk4mraKb30oQZ8LUyd5WPzUgTfACfahxsb0C_Eoa4LX12fYMHxLlTVTrgKVUOycnq_iAqO_UrPogFs7I4vkjEUjNdZHIdBDW2dHJy87JSviWTwJ8mDpWppC4V7B7jmCJWY2qDyj38cA9dE8XdX6i_HhwXalFLoCqPS9p9BFG3unQs4x4myOJjmvsiit0EIxSDFynNLJBQfH-dYWqhGSo0NV0eS-fyKhP7mF_LwNSIfOTm-gGRH13eRgaEXENsMtCn6xZz20G53_fXXn3_9Yddn3ieleH41xzE3LNBo3-o5pu5WpRyTsxhp-0PaBdMqKz5-3ocIq2jinNx6oZza4XHaJcO6fMt-m4LnB6LYoo50hywdjRcjtlTlgpP0A0JJTXg6VfysGEIMW6gNQhEBiUeRCBvNaf39EGJboosWWAI3kZIPsMobMtMbkNhNzLhe-Lmvk4WUsBOrnz9Xb6wFS22cOgTyLVHRtWudY4_9rbqsRXmrmjH2OWoXqJr22B2Dy2iubhYjMZBwnPB6eleNaIPeDT8ny86NAuMTwHYAh8kg6cmK4Ydr2RjQxbv25HAsOUVb8HipvYVYOWvYEYjwfE1d0sS4rW0mV0bG1Tdmfw7h7tZ4nl8_Xm_6_zI_c12skv9Pmaw0zBPlmZtHS7ObxHUBM7b-N-U01Zjsx1r8xiJqwgUNPEmBS7eXw4ZRXy2GlLyXgd8N5dOodXR0j9lSQYJZWwTZyuEv-aDH7ejQLGJAsx3S49v4CHLWhxVBTxc1fYfEteEaqvaGRyafxES-S2AHDmOKDV8Lb9bYc_U-Ku7UBkZqA09T2SAUCjWOi5In_UMcB7tS5fQOefvsF1v6wvfjf3eTsEOarhQiO0XYGIiuXNJPSuCUFhhrBAHYbu5FJdl9_pqJx5tnnbOGbnTGzTGWcrnEd3Gvz55muUhCPbHk_Jf5tmmL0zujBp9qELARAJFqKyrzefd8-by0uzkBBuPui0sGlpZyDxuN2DnS7DuAeK6F_jp48yQsTUyTfRdG_M_O_-e_2u9iftoLAAA=';
    let embedUrl = 'https://app.powerbi.com/reportEmbed?reportId=e71d1fa8-9324-4a2f-bba5-8b60877a8014&groupId=45f95249-7ae8-4335-899b-d66de3334065';
    let embedReportId = 'e71d1fa8-9324-4a2f-bba5-8b60877a8014';
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

    const basicFilter2: pbi.models.IBasicFilter = {
      $schema: "http://powerbi.com/product/schema#basic",
      target: {
        table: "ScoreArea",
        column: "Party",

      },
      operator: "In",
      values: ['เพื่อไทย'],
      filterType: pbi.models.FilterType.BasicFilter
    }

    let config: IEmbedConfiguration = {
      type: 'report',
      tokenType: models.TokenType.Embed,
      accessToken: accessToken,
      embedUrl: embedUrl,
      id: embedReportId,
      permissions: models.Permissions.All,
      filters: [basicFilter, basicFilter2],
      settings: {
        filterPaneEnabled: true,
        navContentPaneEnabled: true
      }
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