import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ExerciseComponent } from './dashboard/exercise/exercise.component';
import { LoginRegComponent } from './login-reg/login-reg.component';
import { QuizComponent } from './dashboard/quiz/quiz.component';



import { ChangeTireComponent } from './dashboard/exercise/change-tire/change-tire.component';
import { OtherAgileComponent } from './dashboard/exercise/other-agile/other-agile.component';
import { StoriesExerciseComponent } from './dashboard/exercise/stories-exercise/stories-exercise.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './dashboard/about/about.component';

import { ContentComponent } from './dashboard/content/content.component';
import { OverviewComponent } from './dashboard/content/overview/overview.component';
import { ProductOwnerComponent } from './dashboard/content/product-owner/product-owner.component';
import { ScrumMasterComponent } from './dashboard/content/scrum-master/scrum-master.component';
import { DevTeamComponent } from './dashboard/content/dev-team/dev-team.component';
import { SprintCycleComponent } from './dashboard/content/sprint-cycle/sprint-cycle.component';
import { BacklogRefinementComponent } from './dashboard/content/backlog-refinement/backlog-refinement.component';
import { UserStoriesComponent } from './dashboard/content/user-stories/user-stories.component';
import { SprintPlanningComponent } from './dashboard/content/sprint-planning/sprint-planning.component';
import { DailyScrumComponent } from './dashboard/content/daily-scrum/daily-scrum.component';
import { SprintComponent } from './dashboard/content/sprint/sprint.component';
import { SprintReviewComponent } from './dashboard/content/sprint-review/sprint-review.component';
import { SprintRetrospectiveComponent } from './dashboard/content/sprint-retrospective/sprint-retrospective.component';

const routes: Routes = [
  { path: 'login', component: LoginRegComponent },

  { path: '', component: DashboardComponent, children: [
    { path: 'about', component: AboutComponent },
    { path: 'lesson', component: ContentComponent, children: [
      { path: 'overview', component: OverviewComponent },
      { path: 'product-owner', component: ProductOwnerComponent },
      { path: 'scrum-master', component: ScrumMasterComponent },
      { path: 'dev-team', component: DevTeamComponent },
      { path: 'sprint-cycle', component: SprintCycleComponent },
      { path: 'backlog-refinement', component: BacklogRefinementComponent },
      { path: 'user-stories', component: UserStoriesComponent },
      { path: 'sprint-planning', component: SprintPlanningComponent },
      { path: 'daily-scrum', component: DailyScrumComponent },
      { path: 'sprint', component: SprintComponent },
      { path: 'sprint-review', component: SprintReviewComponent },
      { path: 'sprint-retrospective', component: SprintRetrospectiveComponent },
    ]},
    { path: 'quiz/:id', component: QuizComponent },
    { path: 'exercise', component: ExerciseComponent, children: [
      { path: 'change-tire', component: ChangeTireComponent },
      { path: 'other-agile', component: OtherAgileComponent },
      { path: 'stories-exercise', component: StoriesExerciseComponent },
    ]},
  ]},
  { path: '**', redirectTo: 'login' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
