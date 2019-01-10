import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-sprint-cycle',
  templateUrl: './sprint-cycle.component.html',
  styleUrls: ['./sprint-cycle.component.css']
})
export class SprintCycleComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
  }

}
