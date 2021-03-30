import { Component, OnInit } from '@angular/core';

import { HttpService } from "./../../../services/https.service";

@Component({
  selector: 'app-addusermodal',
  templateUrl: './addusermodal.page.html',
  styleUrls: ['./addusermodal.page.scss'],
})
export class AddusermodalPage implements OnInit {

  constructor(
    private httpService:HttpService,
  ) { }

  ngOnInit() {
  }

  addUser() {
    this.httpService.addUser().subscribe(user => {
      console.log(user);
    });
  }

}
