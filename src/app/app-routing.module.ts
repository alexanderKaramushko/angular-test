import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoutePath } from './core/config';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: RoutePath.appForm,
  },
  {
    loadChildren: () => import('./pages/main/main.module').then((m) => m.MainModule),
    path: RoutePath.app,
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
})
export class AppRoutingModule { }
