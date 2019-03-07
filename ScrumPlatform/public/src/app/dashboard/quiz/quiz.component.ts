import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quiz: Object;
  quiz_id: Number;
  grade: Boolean;
  indexNum: Number;

  constructor(private _route: ActivatedRoute, private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.indexNum = 0;
    this._route.params.subscribe(params => {
     this.quiz_id = params.id;
    });
    this.quizzes(this.quiz_id);
  }

  quizzes(num){
    this.grade = false;
    let obs = this._httpService.getQuizzes();
    obs.subscribe(data => {
      if(num == 1){
        this.quiz = data['quizzes'][0];
      }
      if(num == 2){
        this.quiz = data['quizzes'][1];
      }
      // this._router.navigate(['login'])
    })
  }

  answers(something){
    this.grade = true;
  }

}
