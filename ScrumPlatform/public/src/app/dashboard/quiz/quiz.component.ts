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

  constructor(private _route: ActivatedRoute, private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    // if(params.id == 1){
    //   quiz1();
    // }
    // if(params.id == 2){
    //   quiz2();
    // }
    this._route.params.subscribe(params => {
     console.log(`The parent params: ${params}`);
     this.quiz_id = params.id;
    });
    this.quizzes(this.quiz_id);
  }

  quizzes(num){
    let obs = this._httpService.getQuizzes();
    obs.subscribe(data => {
      console.log(data);
      if(num == 1){
        this.quiz = data['quizzes'][0];
        console.log(this.quiz);
      }
      if(num == 2){
        this.quiz = data['quizzes'][1];
        console.log(this.quiz)
      }
      // this._router.navigate(['login'])
    })
  }

}
