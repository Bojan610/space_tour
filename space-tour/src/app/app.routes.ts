import { Routes } from "@angular/router";
import { HomepageComponent } from "./homepage/homepage.component";
import { DestinationComponent } from "./destination/destination.component";

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
    }
];