import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public gs: GlobalService
  ) {}
  instagram_url: string = '';
  SampleTweet: string = 'ここにツイート内容が表示されます';
  send: any ={};
  botten = true;
  errorStatus = 0;
  
  conversion = () => {
    console.log(this.instagram_url);
    this.SampleTweet = "power is power"
  }

  urlCheck() {
    //console.log(this.errorStatus);
    if(this.instagram_url.includes("https://www.instagram.com/p/")){
      this.botten = false;
      this.errorStatus = 1;
    }else{
      this.botten = true;
      this.errorStatus = -1;
    }
    
  }

}
