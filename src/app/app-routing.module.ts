import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeagueSelectionComponent } from './pages/league-selection/league-selection.component';
import { TeamDetailsComponent } from './pages/team-details/team-details.component';

const routes: Routes = [
  { path: '', component: LeagueSelectionComponent },
  { path: 'teamDetails', component: TeamDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
