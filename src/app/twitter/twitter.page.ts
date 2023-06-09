import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';



@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.page.html',
  styleUrls: ['./twitter.page.scss'],
})
export class TwitterPage implements OnInit {

  constructor(
    public gs: GlobalService
  ) { }

  json: any = localStorage.getItem("item");
  textlist: any = JSON.parse(this.json);
  SampleTweet1: string = this.textlist[0];
  SampleTweet2: string = this.textlist[1];
  SampleTweet3: string = this.textlist[2];
  SampleTweet4: string = this.textlist[3];
  SampleTweet: string = this.SampleTweet1;
  nottweet = false;




  tweet1() {
    this.SampleTweet = this.SampleTweet1;
    this.nottweet = false;
  }

  tweet2() {
    if (this.SampleTweet2 != "") {
      this.SampleTweet = this.SampleTweet2;
      this.nottweet = false;
    } else {
      this.SampleTweet = "";
      this.nottweet = true;
    }
  }

  tweet3() {
    if (this.SampleTweet3 != "") {
      this.SampleTweet = this.SampleTweet3;
      this.nottweet = false;
    } else {
      this.SampleTweet = "";
      this.nottweet = true;
    }
  }

  tweet4() {
    if (this.SampleTweet4 != "") {
      this.SampleTweet = this.SampleTweet4;
      this.nottweet = false;
    } else {
      this.SampleTweet = "";
      this.nottweet = true;
    }
  }

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `残り${maxLength - inputLength}文字です。 `;
  }

  ngOnInit() {
    console.log("aaaa");
  }

}
