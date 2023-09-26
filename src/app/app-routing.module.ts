import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IntroComponent } from './pages/intro/intro.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

// type Routes = Route[]
// Routes <=> Route[]
const routes: Routes = [
  // redirectTo => pathMatch mandatory
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'intro', component: IntroComponent },
  // custom preload strategies => eg: preload all offline modules
  { path: 'admin', canActivate: [ /* check module acccess */],  data: { offline: true }, loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
  { path: 'products', loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule) },
  // ** => last element (like regex)
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  // load features from RouterModule (<router-outlet.....>)
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  // exports <=> public (exposer ou exporter <=> return )
  exports: [RouterModule]
})
export class AppRoutingModule {
}
