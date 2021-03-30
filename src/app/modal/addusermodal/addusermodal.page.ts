import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

// import { HttpService } from "./../../../services/https.service";

@Component({
  selector: 'app-addusermodal',
  templateUrl: './addusermodal.page.html',
  styleUrls: ['./addusermodal.page.scss'],
})
export class AddusermodalPage implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  addUser() {
    // this.httpService.addUser().subscribe(user => {
    //   console.log(user);
    // });
  }
  async closeModal() {
    await this.modalController.dismiss();
  }
}
