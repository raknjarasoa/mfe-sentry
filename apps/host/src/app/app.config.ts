import { ApplicationConfig, ErrorHandler } from '@angular/core';
import { provideRouter } from '@angular/router';
import * as Sentry from '@sentry/angular';
import { appRoutes } from './app.routes';

const sentryProviders = [
  {
    provide: ErrorHandler,
    useValue: Sentry.createErrorHandler({
      showDialog: false,
    }),
  },
  // {
  //   provide: Sentry.TraceService,
  //   deps: [Router],
  // },
  // {
  //   provide: APP_INITIALIZER,
  //   useFactory: () => () => {},
  //   deps: [Sentry.TraceService],
  //   multi: true,
  // },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes), ...sentryProviders],
};
