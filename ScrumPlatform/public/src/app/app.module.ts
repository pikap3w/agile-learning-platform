import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { LoginRegComponent } from './login-reg/login-reg.component';
import { QuizComponent } from './quiz/quiz.component';
import { ExerciseComponent } from './exercise/exercise.component';

import { ChangeTireComponent } from './exercise/change-tire/change-tire.component';
import { OtherAgileComponent } from './exercise/other-agile/other-agile.component';
import { StoriesExerciseComponent } from './exercise/stories-exercise/stories-exercise.component';

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



@NgModule({
  declarations: [
    AppComponent,
    LoginRegComponent,
    QuizComponent,
    ExerciseComponent,
    ContentComponent,
    AboutComponent,
    OverviewComponent,
    ProductOwnerComponent,
    ScrumMasterComponent,
    DevTeamComponent,
    SprintCycleComponent,
    BacklogRefinementComponent,
    UserStoriesComponent,
    SprintPlanningComponent,
    DailyScrumComponent,
    SprintComponent,
    SprintReviewComponent,
    SprintRetrospectiveComponent,
    ChangeTireComponent,
    OtherAgileComponent,
    StoriesExerciseComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
