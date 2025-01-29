import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-ui',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div>
      <button
        (click)="removeCount()"
        [disabled]="counter() === 0"
        class="btn btn-primary"
      >
        -
      </button>
      <span data-testid="current">{{ counter() }}</span>
      <button (click)="addCount()" class="btn btn-primary">+</button>
      <br />
      @if (isFizz()) {
        <span>Fizz</span>
      }
      @if (isBuzz()) {
        <span>Buzz</span>
      }
    </div>
  `,
  styles: ``,
})
export class UiComponent {
  counter = signal(0);

  getcounter() {
    return this.counter.asReadonly();
  }

  addCount() {
    this.counter.update((current) => current + 1);
  }

  removeCount() {
    if (this.counter() > 0) {
      this.counter.update((current) => current - 1);
    }
  }

  isFizz() {
    if (this.counter() === 0) {
      return '';
    }
    return this.counter() % 3 === 0;
  }
  isBuzz() {
    if (this.counter() === 0) {
      return '';
    }
    return this.counter() % 5 === 0;
  }
}
