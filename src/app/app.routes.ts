import { Routes } from '@angular/router';
import { ResourcesComponent } from './resources/resources.component';
import { canMatchFeature } from './shared';

export const routes: Routes = [
  {
    path: 'resources',
    component: ResourcesComponent,
  },
  {
    path: 'demos',
    data: {
      preload: true,
    },
    loadChildren: () =>
      import('./demos/demos.routes').then((r) => r.DEMO_ROUTES), // dynamic import
  },

  {
    path: 'golf',
    canMatch: [canMatchFeature('golf')],
    loadChildren: () => import('./golf/golf.routes').then((r) => r.GOLF_ROUTES),
  },
  // {
  //   path: 'jeff-counter',
  //   data: {
  //     preload: true,
  //   },
  //   loadChildren: () =>
  //     import('./jeff-counter/counter.routes').then((r) => r.COUNTER_ROUTES),
  // },
  {
    path: 'counter',
    data: {
      preload: true,
    },
    loadChildren: () =>
      import('./counter/counter.routes').then((r) => r.COUNTER_ROUTES),
  },
];
