import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as Sentry from '@sentry/angular';
import { NxWelcomeComponent } from './nx-welcome.component';

Sentry.getCurrentScope().setTag('feature', 'shop');

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'acme-shop-entry',
  template: `<acme-nx-welcome></acme-nx-welcome>`,
})
export class RemoteEntryComponent {
  constructor() {
    throw new Error('Shop Error ' + Date.now());
  }
}
