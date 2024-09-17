import { Injectable } from "@angular/core";
import { Planet } from "../models/planet.model";

@Injectable({providedIn: 'root'})
export class DestinationService {
    private planets: Planet[] = [];

    constructor() {
         this.planets = [
            { id: '0', name: 'Europa', image: 'image-europa.png', descrition: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.', avgDistance: '628 mil. km', estTravelTime: '3 years' },
            { id: '1', name: 'Mars', image: 'image-mars.png', descrition: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!', avgDistance: '225 mil. km', estTravelTime: '9 Months'},
            { id: '2', name: 'Moon', image: 'image-moon.png', descrition: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.', avgDistance: '384,400 km',  estTravelTime: '3 days' },
            { id: '3', name: 'Titan', image: 'image-titan.png', descrition: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.', avgDistance: '1.6 bil. km', estTravelTime: '7 years' }
        ];
    }

    getPlanets() {
        return [...this.planets];
    }

}