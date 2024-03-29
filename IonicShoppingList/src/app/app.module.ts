import { EditShoppingListPage } from './../pages/edit-shopping-list/edit-shopping-list';
import { AddShoppingItemPage } from './../pages/add-shopping-item/add-shopping-item';
import { HomePage } from './../pages/home/home';
import { ToastService } from './../services/toast/toast.service';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import {AngularFireModule } from 'angularfire2';
import { FIREBASE_CONFIG } from './firebase.credentials';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';
import { ShoppingListService } from '../services/shopping-list/shopping-list.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddShoppingItemPage,
    EditShoppingListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddShoppingItemPage,
    EditShoppingListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ShoppingListService,
    ToastService
  ]
})
export class AppModule {}
