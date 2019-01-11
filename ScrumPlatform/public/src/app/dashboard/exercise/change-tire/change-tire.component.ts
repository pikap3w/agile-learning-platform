import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../../../http.service';

@Component({
  selector: 'app-change-tire',
  templateUrl: './change-tire.component.html',
  styleUrls: ['./change-tire.component.css']
})
export class ChangeTireComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
  }

}
