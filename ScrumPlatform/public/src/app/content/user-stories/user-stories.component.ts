import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-user-stories',
  templateUrl: './user-stories.component.html',
  styleUrls: ['./user-stories.component.css']
})
export class UserStoriesComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
  }

}
