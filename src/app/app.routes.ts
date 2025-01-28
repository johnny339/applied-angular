import { Routes } from '@angular/router';
import { ResourcesComponent } from './resources/resources.component';

export const routes: Routes = [
  {
    path: 'resources',
    component: ResourcesComponent,
  },
  {
    path: 'demos',
    loadChildren: () =>
      import('./demos/demos.routes').then((r) => r.DEMO_ROUTES), // dynamic import
  },
];
