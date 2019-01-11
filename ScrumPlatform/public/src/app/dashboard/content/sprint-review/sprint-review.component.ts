import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../../../http.service';

@Component({
  selector: 'app-sprint-review',
  templateUrl: './sprint-review.component.html',
  styleUrls: ['./sprint-review.component.css']
})
export class SprintReviewComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
  }

}
