import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular'; //estrucutras de pagina
// import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
// import { IonIcon } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import * as allIcons from 'ionicons/icons';

addIcons(allIcons);

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor(private navCtrl: NavController) {}

  navto(item: string) {
    this.navCtrl.navigateForward(`/detalle/${item}`);
  }
}
