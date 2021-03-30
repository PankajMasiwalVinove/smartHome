import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  gallery: any = [
    { "id": "1", "name": "Livingroom", "image": "/assets/img/room1.jpg", "tmp": 23.3 },
    { "id": "2", "name": "Kitchen", "image": "/assets/img/kitchen.jpg", "tmp": 24.6 },
    { "id": "3", "name": "Bedroom", "image": "/assets/img/room1.jpg", "tmp": 22.9 },
    { "id": "3", "name": "Bedroom", "image": "/assets/img/room2.jpg", "tmp": 22.3 },
    { "id": "3", "name": "Bedroom", "image": "/assets/img/room3.jpg", "tmp": 18.5 }
  ];
  rooms: any = [
    { "name": "Home", "image": "bed.svg", "link": "/home" },
    { "name": "Statistics", "image": "tray.svg", "link": "/stats" },
    { "name": "Activity", "image": "bathtub.svg", "link": "/activity" }
  ];

  constructor() {}

}
