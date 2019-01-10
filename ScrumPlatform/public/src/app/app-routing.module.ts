import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContentComponent } from './content/content.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { LoginRegComponent } from './login-reg/login-reg.component';
import { QuizComponent } from './quiz/quiz.component';

import { OverviewComponent } from './content/overview/overview.component';
import { ProductOwnerComponent } from './content/product-owner/product-owner.component';
import { ScrumMasterComponent } from './content/scrum-master/scrum-master.component';
import { DevTeamComponent } from './content/dev-team/dev-team.component';
import { SprintCycleComponent } from './content/sprint-cycle/sprint-cycle.component';
import { BacklogRefinementComponent } from './content/backlog-refinement/backlog-refinement.component';
import { UserStoriesComponent } from './content/user-stories/user-stories.component';
import { SprintPlanningComponent } from './content/sprint-planning/sprint-planning.component';
import { DailyScrumComponent } from './content/daily-scrum/daily-scrum.component';
import { SprintComponent } from './content/sprint/sprint.component';
import { SprintReviewComponent } from './content/sprint-review/sprint-review.component';
import { SprintRetrospectiveComponent } from './content/sprint-retrospective/sprint-retrospective.component';


const routes: Routes = [
  { path: 'login', component: LoginRegComponent },
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
  { path: 'exercise/:id', component: ExerciseComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: 'login' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
