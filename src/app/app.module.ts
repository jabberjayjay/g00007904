import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Http } from '@angular/http';
import {HttpModule} from '@angular/http';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FilmPage } from '../pages/film/film';
import { GroupPage } from '../pages/group/group';
import { StudentsPage } from '../pages/students/students';
import { MovieProvider } from '../pages/film/Movie';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FilmPage,
    GroupPage,
    StudentsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FilmPage,
    GroupPage,
    StudentsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MovieProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieProvider
  ]
})
export class AppModule {}
