import { Component } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  phoneNumber:number;

  constructor(private call: CallNumber) {

  }

  async callNumber():Promise<any> {
    try {
      await this.call.callNumber(String(this.phoneNumber), true);
      console.log(this.phoneNumber);
    }
    catch(e) {
      console.error(e);
    }
  }
}
