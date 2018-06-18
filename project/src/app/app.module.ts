import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'

import { AngularFontAwesomeModule  } from 'angular-font-awesome'

import { ExperiencesComponent } from './pages/experiences/experiences.component'
import { CompetencesComponent } from './pages/competences/competences.component'
import { DiplomesComponent } from './pages/diplomes/diplomes.component'
import { DiversComponent } from './pages/divers/divers.component'

import { AppRoutingModule } from './app-routing.module';
import { AsideComponent } from './aside/aside.component';
import { CatAmaniaComponent } from './pages/entreprises/cat-amania/cat-amania.component';
import { SiiComponent } from './pages/entreprises/sii/sii.component';
import { FirstWebComponent } from './pages/entreprises/first-web/first-web.component';
import { AvensysComponent } from './pages/entreprises/avensys/avensys.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperiencesComponent,
    CompetencesComponent,
    DiplomesComponent,
    DiversComponent,
    AsideComponent,
    CatAmaniaComponent,
    SiiComponent,
    FirstWebComponent,
    AvensysComponent,
    AccueilComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
