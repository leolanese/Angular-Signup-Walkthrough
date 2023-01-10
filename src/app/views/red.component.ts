import { Component } from '@angular/core';

@Component({
  selector: 'red-component',
  template: ``,
  styles: [`
    :host {
      display: block;
      height: 30px;
      width: 30px;
      background-color:red;
    }
  `]
})
export class RedComponent {

}
