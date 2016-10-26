import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { User } from '../../user-model';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class Signup {

   user: User = {
    name: "",
    username: "samarth",
    email: "",
    password: ""
  };

  confirmPassword: string;
  url: string;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public _http: Http) {
  }

  goToLogin(){
    this.navCtrl.pop();
  }
}
