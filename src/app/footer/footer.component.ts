import { Component, Input, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../api-requests/api.service";

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent  {

  pageNumber$ = this.service.pageNumber$;

  constructor(
    private location: Location,
    private service: ApiService,
    private route: ActivatedRoute) {
  }

  goBackward() {
    // this.router.navigate([this.service.previousStep], {})
    this.location.back();
  }

  onPageUp(val: Object) {
    this.service.pageUp(val);
  }

  onPageDown(val: Object) {
    this.service.pageDown(val);
  }
}
