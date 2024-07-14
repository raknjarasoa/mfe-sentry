import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as Sentry from '@sentry/angular';
import { NxWelcomeComponent } from './nx-welcome.component';

Sentry.getCurrentScope().setTag('feature', 'cart');

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'acme-cart-entry',
  template: `<acme-nx-welcome></acme-nx-welcome>`,
})
export class RemoteEntryComponent {
  constructor() {
    throw new Error('Cart Error ' + Date.now());
  }
}
