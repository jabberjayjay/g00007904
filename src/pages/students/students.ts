import { Component, OnInit } from '@angular/core';

import { User } from '../../app/models/user';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';


@IonicPage()
@Component({
  selector: 'page-students',
  templateUrl: 'students.html',
})
export class StudentsPage implements OnInit {
user: User = {
  firstName: '',
  lastName: '',
  year: null,
  email: ''
}


users: User[];
showExtended: boolean = true;
enableAdd: boolean = false;
showUserForm: boolean = false;

show
  constructor() {
   }

  ngOnInit() {
    console.log('init...')
    this.users =
    [
      {
        firstName : 'John',
      lastName :'Doe',
      year: 2,
      email: 'john@dear.com'
      },
      {
          
        firstName : 'Kevin',
        lastName :'Johnson',
        year: 2,
    email: 'kev@john.com'
    },
    {
        firstName : 'Karen',
      lastName :'Williams',
      year: 2,
    
  
      email: 'kar@will.com'
      },
        {
          firstName : 'David',
        lastName :'Jackson',
        year: 2,
        email: 'David@jacko.com'
          } 
     
     
    ] ;

    /* this.showExtended = false; */
    
   
   
   
  }

 onSubmit(e){
   console.log(123);

   e.preventDefault();
 }


 fireEvent(e){
   console.log(e.type);
   console.log(e.target.value);
 }


  addUser(user: User)
  {
    this.users.unshift(this.user);
    this.user = {  firstName: '',
    lastName: '',
    year: null,
    email: ''}
  }
}
