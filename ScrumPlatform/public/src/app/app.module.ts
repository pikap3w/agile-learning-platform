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
import { ContentComponent } from './content/content.component';
import { AboutComponent } from './about/about.component';
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
    SprintRetrospectiveComponent
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
