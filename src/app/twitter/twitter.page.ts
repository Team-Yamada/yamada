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
  ) {}

  SampleTweet1: string = 'ここにツイート内容が表示されます1';
  SampleTweet2: string = 'ここにツイート内容が表示されます2';
  SampleTweet3: string = 'ここにツイート内容が表示されます3';
  SampleTweet4: string = 'ここにツイート内容が表示されます4';
  SampleTweet: string = this.SampleTweet1;
  send: any ={};
  nottweet = false;

  tweet1(){
    this.SampleTweet = this.SampleTweet1;
  }

  tweet2(){
    if(this.SampleTweet2!=""){
      this.SampleTweet = this.SampleTweet2;
    }else{
      this.nottweet = true;
    }
  }

  tweet3(){
    if(this.SampleTweet3!=""){
      this.SampleTweet = this.SampleTweet3;
    }else{
      this.nottweet = true;
    }
  }

  tweet4(){
    if(this.SampleTweet4!=""){
      this.SampleTweet = this.SampleTweet4;
    }else{
      this.nottweet = true;
    }
  }
  
  customCounterFormatter(inputLength: number, maxLength: number) {
    return `残り${maxLength - inputLength}文字です。 `;
  }

  ngOnInit() {
  }

}
