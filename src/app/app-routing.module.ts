import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/app/form',
  },
  {
    loadChildren: () => import('./pages/main/main.module').then((m) => m.MainModule),
    path: 'app',
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
})
export class AppRoutingModule { }
