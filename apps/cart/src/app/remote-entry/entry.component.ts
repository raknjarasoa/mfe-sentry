import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'acme-cart-entry',
  template: `<acme-nx-welcome></acme-nx-welcome>`,
})
export class RemoteEntryComponent {}
