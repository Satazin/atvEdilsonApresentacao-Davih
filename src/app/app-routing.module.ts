import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'apresentacao',
    pathMatch: 'full'
  },
  {
    path: 'etapa1',
    loadChildren: () => import('./apresentacao/etapa1/etapa1.module').then( m => m.Etapa1PageModule)
  },
  {
    path: 'etapa2',
    loadChildren: () => import('./apresentacao/etapa2/etapa2.module').then( m => m.Etapa2PageModule)
  },
  {
    path: 'etapa3',
    loadChildren: () => import('./apresentacao/etapa3/etapa3.module').then( m => m.Etapa3PageModule)
  },
  {
    path: 'apresentacao',
    loadChildren: () => import('./apresentacao/apresentacao.module').then( m => m.ApresentacaoPageModule)
  },
  {
    path: 'revisao-css',
    loadChildren: () => import('./revisao-css/revisao-css.module').then( m => m.RevisaoCssPageModule)
  },
  {
    path: 'revisao-css-layout',
    loadChildren: () => import('./revisao-css-layout/revisao-css-layout.module').then( m => m.RevisaoCssLayoutPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
