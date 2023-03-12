import { Component } from '@angular/core';
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { timeout, catchError } from 'rxjs/operators';

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
    private _http: HttpClient
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
  textlist: any = {};
  

  conversion = () => {
    console.log(this.instagram_url);
    this.post['instagram_url'] = this.instagram_url;
    const body = this.post;

    this.gs.http('https://937e-220-98-199-219.ngrok.io/get_url' , body).subscribe(
      res => {
        console.log("c");
        this.return = res;
        console.log("d");
        this.SampleTweet1 = this.return['tweet_text_0']
        this.SampleTweet2 = this.return['tweet_text_1']
        this.SampleTweet3 = this.return['tweet_text_2']
        this.SampleTweet4 = this.return['tweet_text_3']
        console.log(res);
      }
    )
    // this.SampleTweet = "power is power"

    //this.router.navigate([`/${this.instagram_url}`])
    // jsonを取得

    this.textlist['1'] = this.SampleTweet1;
    this.textlist['2'] = this.SampleTweet2;
    this.textlist['3'] = this.SampleTweet3;
    this.textlist['4'] = this.SampleTweet4;
    localStorage.setItem("item", JSON.stringify(this.textlist));
    this.router.navigate([`/twitter`])
  }

  urlCheck() {
    //console.log(this.errorStatus);
    if (this.instagram_url.includes("https://www.instagram.com/p/")) {
      this.button = false;
      this.errorStatus = 1;
    } else {
      this.button = true;
      this.errorStatus = -1;
    }
  }
  


}
