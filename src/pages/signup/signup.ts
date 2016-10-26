import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class Signup {

  constructor(public navCtrl: NavController) {

  }

  goToLogin(){
    this.navCtrl.pop();
  }
}
