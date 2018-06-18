import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// pages
import { AccueilComponent } from './pages/accueil/accueil.component'
import { ExperiencesComponent } from './pages/experiences/experiences.component'
import { CompetencesComponent } from './pages/competences/competences.component'
import { DiplomesComponent } from './pages/diplomes/diplomes.component'
import { DiversComponent } from './pages/divers/divers.component'
import { ContactComponent } from './pages/contact/contact.component'
// entreprises
import { CatAmaniaComponent } from './pages/entreprises/cat-amania/cat-amania.component';
import { SiiComponent } from './pages/entreprises/sii/sii.component';
import { FirstWebComponent } from './pages/entreprises/first-web/first-web.component';
import { AvensysComponent } from './pages/entreprises/avensys/avensys.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'experiences', component: ExperiencesComponent },
  { path: 'competences', component: CompetencesComponent },
  { path: 'diplomes', component: DiplomesComponent },
  { path: 'divers', component: DiversComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'entreprise/cat-amania', component: CatAmaniaComponent },
  { path: 'entreprise/sii', component: SiiComponent },
  { path: 'entreprise/first-web', component: FirstWebComponent },
  { path: 'entreprise/avensys', component: AvensysComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
