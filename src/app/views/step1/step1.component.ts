import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable, tap} from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1ViewComponent {
  // C
  currentState$: Observable<any>;
  detailProduct: any;

  @Output()
  private notifier = new EventEmitter<any>();

  notify(event: MouseEvent): void {
    const msg: any = {
      name: 'Step1ViewComponent',
      displayText: 'step 1 message'
    };
    console.log(`${Step1ViewComponent.name} emitting`, { msg });
    this.notifier.emit(event);
  }

  constructor(public route: ActivatedRoute,private router: Router) {
    this.detailProduct = this.router?.getCurrentNavigation().extras?.state;
    console.log(this.detailProduct);
  }

  ngOnInit() {
    this.currentState$ = this.route.paramMap.pipe(
      tap(window.history.state.detailProduct),
      map(() => window.history.state.detailProduct)
    );
  }

}
