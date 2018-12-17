import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  user : User;
  inputText :  string = "Please enter text";

  constructor() {
    this.user = new User();
    this.user.name = 'Prerna';
    this.user.designation = 'Software Dev',
    this.user.address = 'Filtrowa 66/11, Warsaw 02-567',
     this.user.phone = ['567465387', '564789013']} ;
  }


  
 

