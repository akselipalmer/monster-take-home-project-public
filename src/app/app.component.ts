import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlightInfoFormComponent } from './flight-info-form/flight-info-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FlightInfoFormComponent],
  template: `<router-outlet />`,
})
export class AppComponent {
  title = 'Flight Info App';

  constructor() {}
}
