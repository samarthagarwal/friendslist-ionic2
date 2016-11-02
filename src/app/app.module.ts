import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { Signup } from '../pages/signup/signup';
import { ListPage } from '../pages/list-page/list-page';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    Signup,
    ListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    Signup,
    ListPage
  ],
  providers: []
})
export class AppModule {}
