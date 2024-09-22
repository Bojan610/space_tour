import { Component, inject, Input, OnInit } from '@angular/core';
import { DestinationService } from '../../services/destination.service';
import { Planet } from '../../models/planet.model';
import { ActivatedRouteSnapshot, ResolveFn, Router, RouterLink, RouterLinkActive, RouterOutlet, RouterStateSnapshot } from '@angular/router';
import { routes } from '../../app.routes';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-planet',
  standalone: true,
  imports: [ RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './planet.component.html',
  styleUrl: './planet.component.css',
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class PlanetComponent implements OnInit {
  @Input({required: true}) planet?: Planet;

  constructor(private router: Router) {}
  
  ngOnInit(): void {
   if (!this.planet) {
    this.router.navigate(['/**'], {
      replaceUrl: true,    
    });
   }
  }

  closePlanet() {
    this.router.navigate(['/destination'], {
      replaceUrl: true,    
    });
  }
}

export const resolvePlanet: ResolveFn<Planet | undefined> = (activatedRoute: ActivatedRouteSnapshot) => {
  const destinationService = inject(DestinationService);
  const planet = destinationService.getPlanet(activatedRoute.paramMap.get('planetName') || '');

  return planet;
};
