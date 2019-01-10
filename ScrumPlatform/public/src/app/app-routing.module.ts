import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContentComponent } from './content/content.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { LoginRegComponent } from './login-reg/login-reg.component';
import { QuizComponent } from './quiz/quiz.component';


const routes: Routes = [
  { path: 'login', component: LoginRegComponent },
  { path: 'lesson/:id', component: ContentComponent },
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
