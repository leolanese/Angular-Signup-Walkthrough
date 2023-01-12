import { Component, Input, OnInit } from "@angular/core";
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
  constructor(private location: Location, private service: ApiService) {}

  disclaimer: String;
  public onBoardSignup$: Observable<Onboarding[]> = this.service.onBoardSignup$;

  goBackward() {
    this.location.back();
  }
}
