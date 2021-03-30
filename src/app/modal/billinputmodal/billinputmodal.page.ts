import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular";
  
@Component({
  selector: 'app-billinputmodal',
  templateUrl: './billinputmodal.page.html',
  styleUrls: ['./billinputmodal.page.scss'],
})
export class BillinputmodalPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  selectDate() {
    console.log("Date selector has opened")
  }

  selectFrequency() {
    console.log("Frequency selector will come here")
  }

  setConsumptionRate() {
    console.log("Consumption rate will come here")
  }

  setExportRate() {
    console.log("Export rate will come here")
  }

  async closeModal() {
    await this.modalController.dismiss();
  }
}
