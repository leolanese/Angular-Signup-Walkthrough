import { Component, Input, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { Observable } from "rxjs";
import { ApiService } from "../api-requests/api.service";
import { Onboarding } from "../../assets/onBoardModule";

@Component({
  selector: 'footer-disclaimer.component',
  templateUrl: './footer-disclaimer.component.html',
  styleUrls: ['./footer-disclaimer.component.scss']
})
export class FooterDisclaimerComponent  {
  constructor(private location: Location, private service: ApiService) {}

  disclaimer: String;
  public onBoardSignup$: Observable<Onboarding[]> = this.service.onBoardSignup$;

  goBackward() {
    // this.router.navigate([this.service.previousStep], {})
    this.location.back();
  }
}
