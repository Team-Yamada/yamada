import { Component } from '@angular/core';
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public gs: GlobalService,
    private router: Router
  ) { }
  instagram_url: string = '';
  SampleTweet: string = 'ここにツイート内容が表示されます';
  send: any = {};
  button = true;
  errorStatus = 0;

  conversion = () => {
    console.log(this.instagram_url);
    // this.SampleTweet = "power is power"

    this.router.navigate([`/${this.instagram_url}`])
    // jsonを取得

    this.router.navigate([`/twitter`])
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
