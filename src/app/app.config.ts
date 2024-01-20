import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { appRoutes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { sessionInterceptor } from '@core/interceptors/inject-session';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient( withInterceptors([sessionInterceptor]) ),
    provideRouter(appRoutes),
    CookieService
  ]
};