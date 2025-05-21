import { Component } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular'; //estrucutras de pagina
// import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
// import { IonIcon } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import * as allIcons from 'ionicons/icons';
import { CommonModule } from '@angular/common';

addIcons(allIcons);

import { NavController } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage {
  selectedDate: string | null = null;
  showModal = false; 


  constructor(private navCtrl: NavController, private router: Router, private modalCtrl: ModalController) {}

  navto(item: string) {
    this.navCtrl.navigateForward(`/detalle/${item}`);
  }
  navGrafico() {
    this.navCtrl.navigateRoot(['/grafico']);
  }
  navPerfil() {
    this.navCtrl.navigateRoot(['/perfil']);
  }
  navPedidos() {
    this.navCtrl.navigateRoot(['/pedidos']);
  }
  navCalendario() {
    this.navCtrl.navigateRoot(['/calendario']);
  }

  alertButtons = ['Cerrar'];


  openFecha() {
  const activeElement = document.activeElement as HTMLElement;
  if (activeElement) {
    activeElement.blur(); 
  }

  this.showModal = true;
}


  updateSelection(event: any) {
    this.selectedDate = event.detail.value;
  }

  closeFecha() {
    this.showModal = false;
    document.body.focus();
  }
}