import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExperiencesComponent } from './pages/experiences/experiences.component'
import { CompetencesComponent } from './pages/competences/competences.component'
import { DiplomesComponent } from './pages/diplomes/diplomes.component'
import { DiversComponent } from './pages/divers/divers.component'

const routes: Routes = [
  { path: 'experiences', component: ExperiencesComponent },
  { path: 'competences', component: CompetencesComponent },
  { path: 'diplomes', component: DiplomesComponent },
  { path: 'divers', component: DiversComponent },
  { path: '', redirectTo: '/experiences', pathMatch: 'full' },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
