import { Routes } from "@angular/router";
import { HomepageComponent } from "./homepage/homepage.component";
import { DestinationComponent } from "./destination/destination.component";
import { CrewComponent } from "./crew/crew.component";
import { TechnologyComponent } from "./technology/technology.component";
import { PlanetComponent, resolvePlanet } from "./destination/planet/planet.component";
import { PlanetsComponent } from "./destination/planets/planets.component";
import { OverviewComponent } from "./destination/planet/overview/overview.component";
import { InternalStructureComponent } from "./destination/planet/internal-structure/internal-structure.component";
import { SurfaceGeologyComponent } from "./destination/planet/surface-geology/surface-geology.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { CrewService } from "./services/crew.service";
import { TechnologyService } from "./services/technology.service";
import { DestinationService } from "./services/destination.service";

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomepageComponent,
        title: 'Space Tour - Home' 
    },
    {
        path: 'destination',
        component: DestinationComponent,
        title: 'Space Tour - Destination',
        children: [
            {
                path: '',
                redirectTo: 'planets',
                pathMatch: 'prefix'
            },
            {
                path: 'planets',
                loadComponent: () => import('./destination/planets/planets.component').then(mod => mod.PlanetsComponent), 
                providers: [DestinationService],
            },
            {
                path: ':planetName',
                loadComponent: () => import('./destination/planet/planet.component').then(mod => mod.PlanetComponent), 
                providers: [DestinationService],
                resolve: { planet: resolvePlanet},
                children: [
                    {
                        path: '',
                        redirectTo: 'overview',
                        pathMatch: 'prefix'
                    },
                    {
                        path: 'overview',
                        component: OverviewComponent
                    },
                    {
                        path: 'internal-structure',
                        component: InternalStructureComponent
                    },
                    {
                        path: 'surface-geology',
                        component: SurfaceGeologyComponent
                    }
                ]
            }
        ]
    },
    {
        path: 'crew',
        providers: [CrewService],
        loadComponent: () => import('./crew/crew.component').then(mod => mod.CrewComponent), 
        title: 'Space Tour - Crew' 
    },
    {
        path: 'technology',
        providers: [TechnologyService],
        loadComponent: () => import('./technology/technology.component').then(mod => mod.TechnologyComponent),
        title: 'Space Tour - Technology' 
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];