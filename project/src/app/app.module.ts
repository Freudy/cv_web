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

@NgModule({
  declarations: [
    AppComponent,
    ExperiencesComponent,
    CompetencesComponent,
    DiplomesComponent,
    DiversComponent,
    AsideComponent
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
