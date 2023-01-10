import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'checkbox-component',
  templateUrl: 'checkbox.component.html',
  styleUrls: ['checkbox.component.scss'],
})
export class CheckboxComponent  implements OnInit {
  selectAll = false;

  @Input()
  greetMessage: string;

  @Input()
  childmessage: string;

  @Input()
  valuesToDisplay: any;

  @Input()
  data: any;

  constructor(){}

  updateCheck() {
    console.log(this.selectAll);
    if (this.selectAll === true){
      this.data.map((pizza)=>{
        pizza.checked=true;
      });

    } else {
      this.data.map((pizza)=>{
        pizza.checked=false;
      });
    }
  }

  ngOnInit(): void {
  }
}
