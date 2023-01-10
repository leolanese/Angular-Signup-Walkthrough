## Demo

> testing ADS carousel 

```js
<app-carousel
  #carousel
  [itemWidth]="250"
  [itemHeigth]="250"
  [itemsQuantity]="itemsQuantity"
  [showControls]="true"
>
<ng-container *duplicate>
<img *ngFor="let item of items" [src]="item.img" />
  </ng-container>

</app-carousel>

<div style="text-align:center">
  <img
  *ngFor="let item of items; let i = index"
  width="25x"
  style="margin:.25rem"
  (click)="carousel.onSetSlide(i)"
  [src]="item.img"
  />
</div>

```
