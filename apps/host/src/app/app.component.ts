import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'acme-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'host';

  constructor() {
    setTimeout(() => {
      // throw new Error('Njarasoa Test Error');
      console.log((Math.PI as any)(0));
    });
  }
}
