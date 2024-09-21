import { Component, Input } from '@angular/core';
import { Planet } from '../../../models/planet.model';
import { DestinationService } from '../../../services/destination.service';

@Component({
  selector: 'app-surface-geology',
  standalone: true,
  imports: [],
  templateUrl: './surface-geology.component.html',
  styleUrl: './surface-geology.component.css'
})
export class SurfaceGeologyComponent {
  @Input({required: true}) planetName!:string;
  planet?: Planet;

  constructor(private destinationService: DestinationService) {}
  
  ngOnInit(): void {
    this.planet = this.destinationService.getPlanet(this.planetName);
  }
}
