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
  send: any ={};
  botten = true;
  
  customCounterFormatter(inputLength: number, maxLength: number) {
    return `残り${maxLength - inputLength}文字です。 `;
  }

  ngOnInit() {
  }

}
