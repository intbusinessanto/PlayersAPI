import { ApplicationConfig } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';
// Modulo para hacer las peticiones https
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withEnabledBlockingInitialNavigation()), provideAnimations(), provideHttpClient()]
};
