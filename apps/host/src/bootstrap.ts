import { bootstrapApplication } from '@angular/platform-browser';
import {
  init,
  makeFetchTransport,
  makeMultiplexedTransport,
} from '@sentry/angular';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

init({
  dsn: 'https://2d3e0f9bf52faa11f8bd3a05c397b782@o4507595959697408.ingest.de.io/4507596149948496',
  release: 'v23.0.2',
  // integrations: [
  //   Sentry.browserTracingIntegration(),
  //   Sentry.replayIntegration(),
  // ],
  // Performance Monitoring
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for tracing.
  // We recommend adjusting this value in production
  // tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  // tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],
  // Capture Session Replay for 10% of all sessions,
  // replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  // replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  transport: makeMultiplexedTransport(makeFetchTransport, ({ getEvent }) => {
    const event = getEvent();
    switch (event?.tags?.['feature']) {
      case 'shop':
        return [
          {
            dsn: 'https://deca3c1afd4836d0caa91f2c1291860f@o4507595959697408.ingest.de.sentry.io/4507599798272080',
            release: 'v23.0.2',
          },
        ];
      case 'cart':
        return [
          {
            dsn: 'https://9a58b5897a7e2f396e5a624defbd4f34@o4507595959697408.ingest.de.sentry.io/4507599799124048',
            release: 'v23.0.2',
          },
        ];
      default:
        return [];
    }
  }),
});

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
