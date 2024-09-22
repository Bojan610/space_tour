import { Component, Input } from '@angular/core';
import { Planet } from '../../../models/planet.model';

@Component({
  selector: 'app-internal-structure',
  standalone: true,
  imports: [],
  templateUrl: './internal-structure.component.html',
  styleUrl: './internal-structure.component.css'
})
export class InternalStructureComponent {
  @Input({required: true}) planet?: Planet;
}
