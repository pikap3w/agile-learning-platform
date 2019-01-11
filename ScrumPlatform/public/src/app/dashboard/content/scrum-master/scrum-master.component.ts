import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../../../http.service';

@Component({
  selector: 'app-scrum-master',
  templateUrl: './scrum-master.component.html',
  styleUrls: ['./scrum-master.component.css']
})
export class ScrumMasterComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
  }

}
