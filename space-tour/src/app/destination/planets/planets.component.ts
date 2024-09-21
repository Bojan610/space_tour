import { Component } from '@angular/core';
import { Planet } from '../../models/planet.model';
import { DestinationService } from '../../services/destination.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-planets',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.css'
})
export class PlanetsComponent {
  planets: Planet[] = [];

  constructor(private destinationService: DestinationService) {
    this.planets = this.destinationService.getPlanets();
  }

}
