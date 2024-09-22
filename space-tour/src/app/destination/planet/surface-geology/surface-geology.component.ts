import { Component, Input } from '@angular/core';
import { Planet } from '../../../models/planet.model';

@Component({
  selector: 'app-surface-geology',
  standalone: true,
  imports: [],
  templateUrl: './surface-geology.component.html',
  styleUrl: './surface-geology.component.css'
})
export class SurfaceGeologyComponent {
  @Input({required: true}) planet?: Planet;
}
