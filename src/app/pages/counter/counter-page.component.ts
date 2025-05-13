import { Component, signal } from "@angular/core";

@Component({
    templateUrl: './counter-page.component.html',
    imports: [],
})
export class CounterPageComponent {
  counter = 0;
  counterSignal = signal(0);

  increment(value: number) {
    this.counter++;
    this.counterSignal.update((current) => current + value);
  }

  decrement(value: number) {
    this.counter--;
    this.counterSignal.update((current) => current - value);
  }

  reset() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
