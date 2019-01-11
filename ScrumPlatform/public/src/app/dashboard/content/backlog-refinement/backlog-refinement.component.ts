import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../../../http.service';

@Component({
  selector: 'app-backlog-refinement',
  templateUrl: './backlog-refinement.component.html',
  styleUrls: ['./backlog-refinement.component.css']
})
export class BacklogRefinementComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
  }

}
