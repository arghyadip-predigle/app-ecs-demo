import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () => import('./ecs/ecs.module').then((m) => m.EcsModule),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
