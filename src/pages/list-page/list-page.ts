import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list-page',
  templateUrl: 'list-page.html'
})
export class ListPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ListPage Page');
  }

}
