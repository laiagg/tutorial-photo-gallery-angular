import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { DetallePage } from './detalle/detalle.page';
import { GraficoPage } from './grafico/grafico.page';

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
    path: 'detalle/:item',
    loadComponent: () => import('./detalle/detalle.page').then((m) => m.DetallePage),
  },
  {
    path: 'grafico',
    loadComponent: () => import('./grafico/grafico.page').then( m => m.GraficoPage)
  },
  {
    path: 'perfil',
    loadComponent: () => import('./perfil/perfil.page').then( m => m.PerfilPage)
  },
  {
    path: 'pedidos',
    loadComponent: () => import('./pedidos/pedidos.page').then( m => m.PedidosPage)
  },
  {
    path: 'calendario',
    loadComponent: () => import('./calendario/calendario.page').then( m => m.CalendarioPage)
  },
];
