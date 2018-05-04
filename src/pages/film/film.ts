import { Component } from '@angular/core';
import { MovieProvider } from './Movie';

/* import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from './Movie';

/*
 * Generated class for the FilmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 

@IonicPage() */




@Component({
  selector: 'page-film',
  templateUrl: 'film.html',
  
})
export class FilmPage {

 searchString:string = '';
  movies: any[]=[];
  constructor(private mp:MovieProvider) {
  }
  ionViewDidLoad(){
  this.mp.getMovies().subscribe(data =>
  {
  this.movies = data.Search;
  });

  

  }
}


