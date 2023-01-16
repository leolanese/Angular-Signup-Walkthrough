import { Component } from "@angular/core";
import { Location } from "@angular/common";
import { Observable } from "rxjs";
import { ApiService } from "../api-requests/api.service";
import { Onboarding } from "../../assets/onBoardModule";

@Component({
  selector: 'login-body.component',
  templateUrl: './login-body.component.html',
  styleUrls: ['./login-body.component.scss']
})
export class LoginBodyComponent  {
  constructor(private location: Location, private service: ApiService ) {}

  public onBoardLogin$: Observable<Onboarding[]> = this.service.onBoardLogin$;

  pageNumber$ = this.service.pageNumber$;
}
