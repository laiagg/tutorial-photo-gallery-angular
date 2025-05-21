import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class DetallePage {
  item: string = '';

  constructor(private route: ActivatedRoute, private navCtrl: NavController) {}

  ngOnInit() {
    this.item = this.route.snapshot.paramMap.get('item') || '';
  }
//   volverAtras() {
//   this.navCtrl.navigateBack('/home');
// }
}
