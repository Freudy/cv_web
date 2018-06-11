import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExperiencesComponent } from './pages/experiences/experiences.component'
import { CompetencesComponent } from './pages/competences/competences.component'
import { DiplomesComponent } from './pages/diplomes/diplomes.component'
import { DiversComponent } from './pages/divers/divers.component'

const routes: Routes = [
  { path: '', component: ExperiencesComponent },
  { path: 'experiences', component: ExperiencesComponent },
  { path: 'competences', component: CompetencesComponent },
  { path: 'diplomes', component: DiplomesComponent },
  { path: 'divers', component: DiversComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
