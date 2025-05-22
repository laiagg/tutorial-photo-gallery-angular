import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { DetallePage } from './detalle/detalle.page';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'detalle/:item', // ✅ Se mantiene la ruta dinámica con `item`
    loadComponent: () => import('./detalle/detalle.page').then((m) => m.DetallePage),
  },
];
