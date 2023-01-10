import { Component } from '@angular/core';

@Component({
  selector: 'blue-component',
  template: ``,
  styles: [`
    :host {
      display: block;
      height: 30px;
      width: 30px;
      background-color:blue;
    }
  `]
})
export class BlueComponent {

}
