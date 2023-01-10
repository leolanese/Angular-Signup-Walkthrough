import { Component, Input, OnInit } from "@angular/core";
import { Location } from "@angular/common";

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent  {

  constructor(private location: Location) {
  }

  goBackward() {
    // this.router.navigate([this.service.previousStep], {})
    this.location.back();
  }
}
