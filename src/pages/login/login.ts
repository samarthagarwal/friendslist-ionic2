import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Signup } from '../signup/signup';

@Component({
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
    
  }

  goToSignUp(){
    this.navCtrl.push(Signup);
  }

}
