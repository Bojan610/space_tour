import { Component } from '@angular/core';
import { Planet } from '../models/planet.model';
import { DestinationService } from '../services/destination.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-destination',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.css'
})
export class DestinationComponent {
  planets: Planet[] = [];
  planetToShow?: Planet;

  constructor(private destinationService: DestinationService) {
    this.planets = this.destinationService.getPlanets();
  }

  selectPlanet(selectedPlanet: Planet) {
    this.planetToShow = selectedPlanet;
  }

  unselectPlanet() {
    this.planetToShow = undefined;
  }
}
