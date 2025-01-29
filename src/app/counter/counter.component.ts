import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div>
      Counter Stuff Goes Here
      <br />
      <a class="link" routerLink="ui">UI</a>
      <br />
      <a class="link" routerLink="prefs">Prefs</a>

      <router-outlet />
    </div>
  `,
  styles: ``,
})
export class CounterComponent {}
