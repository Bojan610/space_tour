import { Component, Input, OnInit } from '@angular/core';
import { DestinationService } from '../../services/destination.service';
import { Planet } from '../../models/planet.model';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-planet',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './planet.component.html',
  styleUrl: './planet.component.css'
})
export class PlanetComponent implements OnInit {
  @Input({required: true}) planetName!:string;
  planet?: Planet;

  constructor(private destinationService: DestinationService, private router: Router) {}
  
  ngOnInit(): void {
    this.planet = this.destinationService.getPlanet(this.planetName);
  }

  closePlanet() {
    this.router.navigate(['/destination'], {
      replaceUrl: true,     //preventing back button in the browser
    });
  }
}
