import { Component, Input } from '@angular/core';
import { Planet } from '../../../models/planet.model';
import { DestinationService } from '../../../services/destination.service';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {
  @Input({required: true}) planetName!:string;
  planet?: Planet;

  constructor(private destinationService: DestinationService) {}
  
  ngOnInit(): void {
    this.planet = this.destinationService.getPlanet(this.planetName);
  }
}
