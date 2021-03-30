import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddusermodalPage } from '../modal/addusermodal/addusermodal.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  constructor(public modalController: ModalController) {}

  async addUser() {
    const modal = await this.modalController.create({
      component: AddusermodalPage,
    });
    return await modal.present();
  }

  async removeUser(user) {
    // this.httpService.removeUser(user).subscribe((user) => {
    //   console.log(user);
    // });
  }

  gallery: any = [
    {
      id: '1',
      name: 'Livingroom',
      image: '/assets/img/livingroom.jpg',
      tmp: 23.3,
    },
    { id: '2', name: 'Kitchen', image: '/assets/img/kitchen.jpg', tmp: 24.6 },
    { id: '3', name: 'Bedroom', image: '/assets/img/room1.jpg', tmp: 22.9 },
    { id: '3', name: 'Bedroom', image: '/assets/img/room2.jpg', tmp: 22.3 },
    { id: '3', name: 'Bedroom', image: '/assets/img/room3.jpg', tmp: 18.5 },
  ];
}
