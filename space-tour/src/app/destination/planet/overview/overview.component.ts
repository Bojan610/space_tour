import { Component, Input } from '@angular/core';
import { Planet } from '../../../models/planet.model';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {
  @Input({required: true}) planet?: Planet;
}
