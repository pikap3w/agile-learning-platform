import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../../../http.service';

@Component({
  selector: 'app-stories-exercise',
  templateUrl: './stories-exercise.component.html',
  styleUrls: ['./stories-exercise.component.css']
})
export class StoriesExerciseComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
  }

}
