import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';
import { Signup } from '../signup/signup';
import { ListPage } from '../list-page/list-page';
import { User } from '../../user-model';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'login.html'
})
export class LoginPage {

  user: User = {
    username: "samarthagarwal",
    password: "123"
  };

  url: string;
  headers: Headers;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public http: Http) {
    this.headers = new Headers();
    this.headers.append("X-Parse-Application-Id", "AppId1");
  }

  goToSignUp(){
    this.navCtrl.push(Signup);
  }

  login(){
    if(!(this.user.username && this.user.password)){
      this.alertCtrl
        .create({ title : "Error", message: "Check username or password. Please retry.", buttons: ['OK']})
        .present();
      return;
    }

    this.url = "https://parsewithionic-samarthagarwal.c9users.io/app1/login?username="+this.user.username+ "&password="+this.user.password;

    this.http.get(this.url, {headers: this.headers}).subscribe(res => {
      console.log(res);
      //Navigate the user to the main app page
      this.navCtrl.setRoot(ListPage);

    }, err => {
      console.log(err);
      this.alertCtrl
        .create({ title : "Error", message: err.text(), buttons: [{
          text: 'OK',
        }]})
        .present();

    })

  }

}
