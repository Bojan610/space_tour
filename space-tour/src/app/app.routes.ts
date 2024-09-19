import { Routes } from "@angular/router";
import { HomepageComponent } from "./homepage/homepage.component";
import { DestinationComponent } from "./destination/destination.component";
import { CrewComponent } from "./crew/crew.component";
import { TechnologyComponent } from "./technology/technology.component";

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'prefix'
    },
    {
        path: 'home',
        component: HomepageComponent,
        title: 'Space Tour - Home' 
    },
    {
        path: 'destination',
        component: DestinationComponent,
        title: 'Space Tour - Destination' 
    },
    {
        path: 'crew',
        component: CrewComponent,
        title: 'Space Tour - Crew' 
    },
    {
        path: 'technology',
        component: TechnologyComponent,
        title: 'Space Tour - Technology' 
    }
];