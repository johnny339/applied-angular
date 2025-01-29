import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withPreloading } from '@angular/router';

import { routes } from './app.routes';

import { provideHttpClient } from '@angular/common/http';
import { CustomPreloadingStrategy, FeaturesService } from './shared';

export const appConfig: ApplicationConfig = {
  providers: [
    CustomPreloadingStrategy,
    FeaturesService,
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withPreloading(CustomPreloadingStrategy)),
  ],
};
