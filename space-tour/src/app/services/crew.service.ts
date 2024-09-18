import { Injectable } from "@angular/core";
import { CrewMember } from "../models/crewMember.model";

@Injectable({providedIn: 'root'})
export class CrewService {
    private crew: CrewMember[] = [];

    constructor() {
        this.crew = [
            { id: '0', position: 'Flight Engineer', name: 'Anousheh Ansari', description: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.', image: 'image-anousheh-ansari.png'},
            { id: '1', position: 'Commander', name: 'Douglas Hurley', description: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as  commander of Crew Dragon Demo-2.', image: 'image-douglas-hurley.png'},
            { id: '2', position: 'Pilot', name: 'Victor Glover', description: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.', image: 'image-victor-glover.png'},
            { id: '3', position: 'Mission Specialist', name: 'Mark Shuttleworth', description: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.', image: 'image-mark-shuttleworth.png'}
        ];
    }

    getCrew() {
        return [...this.crew];
    }
}