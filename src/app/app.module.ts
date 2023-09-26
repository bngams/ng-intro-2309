import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExponentialStrengthPipe } from './pipes/exponentialStrength.pipe';
import { HeaderComponent } from './layout/header/header.component';
import { IntroComponent } from './pages/intro/intro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  // customelements.define('app-root', ...)
  declarations: [
    AppComponent,
    ExponentialStrengthPipe,
    HeaderComponent,
    IntroComponent,
    HomeComponent,
    NotFoundComponent
  ],
  // autres fonctionnalités
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule, // availble for all this module
    // AdminModule, // => NO => lazy load
  ],
  providers: [],
  // composants à charger au démarrage
  bootstrap: [AppComponent]
})
export class AppModule { }
