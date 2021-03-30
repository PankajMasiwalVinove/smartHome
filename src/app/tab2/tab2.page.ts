import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { ModalController } from '@ionic/angular';
import { InfomodalPage } from '../modal/infomodal/infomodal.page';
import { BillinputmodalPage } from '../modal/billinputmodal/billinputmodal.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  @ViewChild('barChart') barChart;

  bars: any;
  colorArray: any;

  constructor(public modalController: ModalController) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.createBarChart();
  }

  async openInfoModal() {
    const modal = await this.modalController.create({
      component: InfomodalPage,
    });
    return await modal.present();
  }

  async openBillInputModal() {
    const modal = await this.modalController.create({
      component: BillinputmodalPage,
    });
    console.log('model.......', modal);
    return await modal.present();
  }

  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Living Room', 'Kitchen', 'Bathroom'],
        datasets: [
          {
            label: 'Kwh',
            data: [2.5, 3.8, 5, 6.9],
            backgroundColor: '#bbdbfb',
            borderColor: 'rgb(236, 232, 232)',
            borderWidth: 3,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }
}
