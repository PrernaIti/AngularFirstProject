import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  routes = [
    {linkName : 'Profile', URL : 'profile'},
    {linkName : 'Contact Info', URL : 'contact'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
