import { Component } from '@angular/core';
import { ApiService } from "../api-requests/api.service";

@Component({
  selector: 'yellow-component',
  template: `
    <small>{{ pageNumber$ | async | json}}</small>
  `,
  styles: [
    `
    :host {
      display: block;
      height: 30px;
      width: 30px;
      background-color: yellow;
    }
  `,
  ],
})
export class YellowComponent {
  pageNumber$ = this.service.pageNumber$;

  constructor(private service: ApiService) {}
}
