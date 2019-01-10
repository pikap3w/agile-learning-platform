import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-sprint-retrospective',
  templateUrl: './sprint-retrospective.component.html',
  styleUrls: ['./sprint-retrospective.component.css']
})
export class SprintRetrospectiveComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
  }

}
