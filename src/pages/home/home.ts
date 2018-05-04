import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FilmPage } from './../film/film';
import { GroupPage } from './../group/group';
import { StudentsPage } from './../students/students';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openFilm(){
    this.navCtrl.push(FilmPage);
  }

  openGroup(){
    this.navCtrl.push(GroupPage);
     }

     openStudents(){
       this.navCtrl.push(StudentsPage);
       
     }
}
