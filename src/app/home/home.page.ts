import { Component } from '@angular/core';
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { timeout, catchError } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';

const HTTP_OPTIONS_GET = {
  headers: new HttpHeaders({
  })
};

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public gs: GlobalService,
    private router: Router,
    private _http: HttpClient,
    private loadingCtrl: LoadingController
  ) { }
  instagram_url: string = '';
  SampleTweet1: string = 'ここにツイート内容が表示されます1';
  SampleTweet2: string = 'ここにツイート内容が表示されます2';
  SampleTweet3: string = 'ここにツイート内容が表示されます3';
  SampleTweet4: string = 'ここにツイート内容が表示されます4';
  send: any = {};
  button = true;
  errorStatus = 0;
  post: any = {};
  return: any = {};
  textlist: any = [];
  loading: any;

  async showLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Loading...',
      duration: 300000000,
      cssClass: 'custom-loading',
    });

    this.loading.present();
  }


  conversion = () => {
    this.showLoading();
    console.log(this.instagram_url);
    this.post['instagram_url'] = this.instagram_url;
    const body = this.post;

    // 起動時毎回変わる
    this.gs.http('http://localhost:8100/get_url()', body).subscribe(
      res => {
        this.return = res;
        this.SampleTweet1 = this.return['tweet_text_0']
        this.SampleTweet2 = this.return['tweet_text_1']
        this.SampleTweet3 = this.return['tweet_text_2']
        this.SampleTweet4 = this.return['tweet_text_3']


        this.textlist[0] = this.SampleTweet1;
        this.textlist[1] = this.SampleTweet2;
        this.textlist[2] = this.SampleTweet3;
        this.textlist[3] = this.SampleTweet4;
        console.log(this.textlist);
        localStorage.setItem("item", JSON.stringify(this.textlist));
        this.loading.dismiss();
        this.router.navigate([`/twitter`])
      }
    )
    // this.SampleTweet = "power is power"

    //this.router.navigate([`/${this.instagram_url}`])
    // jsonを取得
  }

  urlCheck() {
    //console.log(this.errorStatus);
    if (this.instagram_url.includes("https://www.instagram.com/p/") || this.instagram_url.includes("https://instagram.com/p/")) {
      this.button = false;
      this.errorStatus = 1;
    } else {
      this.button = true;
      this.errorStatus = -1;
    }
  }



}
