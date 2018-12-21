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
    let accessToken = 'H4sIAAAAAAAEAB2Wx6rFCpZD_-VNXWD7OBfUwDnn7JlzztlN_3vfrrlgw5K20P_8Y6XvMKfFP__-p2kD-gPIoPPlliEMu2Jirq-FTWhgOGNRM6t68MXzWylbZsgyERw6gBJTxqMdX0jnGTA-7WC1Glr0uQpB7at23vMuQmHuLRxcDZ13H8f6QhI6YhgmmH05abI7vLhXH4WgED6B9WvGG3z0frIZFxiRILoY8hFFR0vL4F5WNyFZkjHNmT0UGBZEnIkhBDl9SLvrOESrRiN51PnovpwL5MFS3wELhg5caC25sja1CJ5-7CWtPzpduUnzvhWrG1NWvifwNO-wjC8riUvU-_QH4rg4TY77hqiKIbi0olMztHo0K0Mgt1dG3VjYKzseBN8J34SQc1katHlPGWyoZBq09e7uoUvxLelYRk2WX4tVwlALk36U2qTS5grAPhN7QIWWXZwlsobQBfzw8MhsJswTZ69t9rK0Rk36SrYdXLE_3zawbjlcwQT79dA9PBHSUKLIm_OZXe0WU-bxJRwSYptcR9FVXcciDpiFAz3p2dvyct1bw0W07VwyI4N4bN7tbXjJ2msUt82nt5TIA77gayCyUFjcsQ4Le6Tk-VmW8Lzx6d4gYxHnD0017JT3566OjnitTWbFnDJdh79keyV9oB1vVPjJQBj9BfPpocKxKcuL1sKDgLx-upDB95SLuOGVsPKuCxa-lGp1UOH2QF5mwn4hVQ3d5Z_jnEfhMZamoliK1soHsg0o6Uwrf9k998jSItB9gSHHrxKzW8X53QMGoY0CAGF1Ewl5ruOSygEwmXkpn7SBzWkfqhV0fs1UHQFDvi-1pH1qHgg1Iilt1Iba3lk93ErwiSoFtbKNI8tJOPWiZTxdTKtiP0KgaawFV2u3cmNu7Lv1RRp3eKoecRMZ41CkdwHoWQDokWjusUytVfvd6F8O97gJ9-w1bqWFBwRp-AA2Z-JzzctTmLjgMav-iwA5tOuMdEvCREafgLpGof7Iri95XtCOK-m18Ec4TfrfBai-TshP03XWoExTFhkB2BIpF_nTbMF9NqmGOb3Tb8Qtq_Unp7WDLP05azrTYqKh0I8Im7tXL2ib0VwszkQcdlEEiN9DdpMmtItXGMMtFLD-bejY_wC_qdRueAgkc-rw72_1gITjgI4SifYAbYOmSspVqhy20oe387Tx6Iwu3pQhugyq3T-8CxxMMSafpBHNHMQMcXAZZ-kEx4n1L5-dQyStICeDMR_-QKmzANZep6Olqs0fxjle7uFXQhzG3C480ageZxp_6orxejV4fgfJSpgIQuu3poR4z7RKzpaVXk2kSxDczJ_Ykqm3FswzecqdKcy54v6N6MYUlqmfq3tzUMw7O117WNAaPj6iHdXLxCh-3N7HrWgalGOvarvF3F9cSFsUshF0bwL5vtRm7QPeH_gVWuPzIk53IvaCHYCEKIUJ1B79O-tjYa1YLBH19t7Nd3JIdtWQ0-e4e112-9r7gplkKPlAAQ6SUBWQbp-N6SlJt69eWbwnlnmsGnEFkLVWwXO3PvZc4tElEil5BDqe1HI8d4wurIYloyX8xeFnMbozCXM044Fq03-HYyz1Nb7iriO76dUBVCefZKT53UbjnhmxJR2beyhkjHzBzw-1vshLBhXQ2K-OKLO9NIwy8O3TK4AOZb8Y2n4CjGcszywLkCwnMqs-zXw6nBUuDmH4XLRVw3G7xtv9tR4z7WBAjUND1TbA9LhATrs-AiIIJnuOMpb2BD33A-JMPA11t7P1tbrKTh8uTQtPDv013PxB6KSMw0a4EJVuyo_uUTzgY_c35muBHM9gdv78CSejvAVPTwwjAUGWXSoPj1BM4Kc1GWYe3mVLKt4RGdyW7_CnR6K0r8hNGjVku_uijNRLI7B5e_n7CMQpYbdGMb8SciXANuNGtOaDnjanr4g799eRnXN0FYVE_gXS8yUS03Kt8ikVq1L0rvyAZqBXWucQUxr98fwgLY-fOcBaBmh73SdVNDBSL0GG3FCQHxklJch4LEzck6fDclodY4CopwUnUcHFwxQMWj4bMu7E055HfWXAZj2wB2_eymyUzEBd1omv2Q0MCC88CzF5Xj-w_jgut1wjT5d5FD4DP2DmOhovRCWiM7bsS1MbjduVBTmywujDLHQ4kNYVF5scdg4UCrD1tRnC_xqoOVsbmSbtvnlWtem9h5lvrVjDmqK9hqNNWMghntZlc4TtiURhbSy4XkZPkBBJzQk2hDujKnhdCPrwypwVMgjgC-olC-FwTgolgE_0_SUIq2BK_i0urVPKKAWWKRrH0nav2MdAw8xEFXDRc-iD6YA-zJC9oUToRO_FUvCDBo6YhkEtpKfrY0bVTiTzf_751z_s9i7HrJbv3_SxY8zYEOQQ8V-wXhap8lIVOHrfF4BGiPTPYD-60Dunxzkfn2Vuj0C6WgqEWGY7U3AwqW_GICD1nLIixZvxWubi_JsaIB33KECredZ3K_ya5BxUXyTVw1-UgtQtWTLBxGwgtcHZat62aVxPPDb2F8Rt2M42HfLsHWOH83EF-azQOvrKINQ8I9Xg74Nnygrab4Lz-kKR0y3eDoLIuvghn_bnZiTZjnVuu0x-Ynb4a2zfzVDkt7-bZM7hOj1Z-Ffq9ITb29GY2pss1YvQD7UrjIUBJIV7rHHM-G5CzIjAI9-574Copfr7cXcS64X3EleAqqszjSvXlmQ-mtzuf95LyhKmj0P9n_9ifpem3OTgj7IfZd_rtBMgbytEulfXpe1x_1fltvWUHudW_smEw0_cCTWD02g4QBtBollutmTGnhHBJ5sSVd5eb_0E9PTKtJaNAZNn9ZN7uRN3bS82mZkZaKSkBKyYsEerg3B3J7o-0WodTpfNGxVp-A-hNQpQKSy-GWCFsVjyl15lSqeA-nvFazIPUdB99VbF6Ujs70DpWwzN70ej3-PwtNzS_AaEQyaBFjPl2qSAa1kjL_w6yTJAAxWi64YszvMHtUS-tKIEi8iEqZSwNRHOitkm7E3fksl3Npa7rH4S7ja4BEGex5moNqn3H3PW8ssoemBbbjaUYG83BPc6DKG8KCK3JCdHh26FIve3Iy4ZthuYyzWoprzCpFHgefaewFD2Jp6f_P-Y__f_AORXvwPuCwAA';
    let embedUrl = 'https://app.powerbi.com/reportEmbed?reportId=e71d1fa8-9324-4a2f-bba5-8b60877a8014&groupId=45f95249-7ae8-4335-899b-d66de3334065&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCJ9';
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

    let config: IEmbedConfiguration = {
      type: 'report',
      tokenType: models.TokenType.Embed,
      accessToken: accessToken,
      embedUrl: embedUrl,
      id: embedReportId,
      permissions: models.Permissions.All,
      filters: [basicFilter],
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


