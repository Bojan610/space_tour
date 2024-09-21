import { Component, Input } from '@angular/core';
import { Planet } from '../../../models/planet.model';
import { DestinationService } from '../../../services/destination.service';

@Component({
  selector: 'app-internal-structure',
  standalone: true,
  imports: [],
  templateUrl: './internal-structure.component.html',
  styleUrl: './internal-structure.component.css'
})
export class InternalStructureComponent {
  @Input({required: true}) planetName!:string;
  planet?: Planet;

  constructor(private destinationService: DestinationService) {}
  
  ngOnInit(): void {
    this.planet = this.destinationService.getPlanet(this.planetName);
  }
}
