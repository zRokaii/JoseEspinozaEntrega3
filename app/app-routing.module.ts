import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'salud',
    loadChildren: () => import('./salud/salud.module').then( m => m.SaludPageModule)
  },
  {
    path: 'tecnologia',
    loadChildren: () => import('./tecnologia/tecnologia.module').then( m => m.TecnologiaPageModule)
  },
  {
    path: 'formulario',
    loadChildren: () => import('./formulario/formulario.module').then( m => m.FormularioPageModule)
  },
  {
    path: 'juegos',
    loadChildren: () => import('./juegos/juegos.module').then( m => m.JuegosPageModule)
  },
  {
    path: 'paises',
    loadChildren: () => import('./paises/paises.module').then( m => m.PaisesPageModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./noticias/noticias.module').then( m => m.NoticiasPageModule)
  },
  {
    path: 'datos',
    loadChildren: () => import('./datos/datos.module').then( m => m.DatosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
