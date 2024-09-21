import { Injectable } from "@angular/core";
import { Planet } from "../models/planet.model";

@Injectable()
export class DestinationService {
    private planets: Planet[] = [];

    constructor() {
         this.planets = [
            { id: '0', name: 'Europa', image: 'image-europa.png', descrition: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.', avgDistance: '628 mil. km', estTravelTime: '3 years', internalStructure: 'It is estimated that Europa has an outer layer of water around 100 km (62 mi) thick – a part frozen as its crust and a part as a liquid ocean underneath the ice. Recent magnetic-field data from the Galileo orbiter showed that Europa has an induced magnetic field through interaction with Jupiter\'s, which suggests the presence of a subsurface conductive layer. This layer is likely to be a salty liquid-water ocean.', surfaceGeology: 'Europa is the smoothest known object in the Solar System, lacking large-scale features such as mountains and craters. The prominent markings crisscrossing Europa appear to be mainly albedo features that emphasize low topography. There are few craters on Europa, because its surface is tectonically too active and therefore young. Its icy crust has an albedo (light reflectivity) of 0.64, one of the highest of any moon.' },

            { id: '1', name: 'Mars', image: 'image-mars.png', descrition: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!', avgDistance: '225 mil. km', estTravelTime: '9 Months', internalStructure: 'Like Earth, Mars is differentiated into a dense metallic core overlaid by less dense rocky layers. The outermost layer is the crust, which is on average about 42–56 kilometres (26–35 mi) thick, with a minimum thickness of 6 kilometres (3.7 mi) in Isidis Planitia, and a maximum thickness of 117 kilometres (73 mi) in the southern Tharsis plateau. For comparison, Earth\'s crust averages 27.3 ± 4.8 km in thickness.', surfaceGeology: 'Mars is a terrestrial planet with a surface that consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The Martian surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt and may be similar to andesitic rocks on Earth, or silica glass.'},

            { id: '2', name: 'Moon', image: 'image-moon.png', descrition: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.', avgDistance: '384,400 km',  estTravelTime: '3 days', internalStructure: 'Having a mean density of 3,346.4 kg/m3, the Moon is a differentiated body, being composed of a geochemically distinct crust, mantle, and planetary core. This structure is believed to have resulted from the fractional crystallization of a magma ocean shortly after its formation about 4.5 bil. years ago. The energy required to melt the outer portion of the Moon is commonly attributed to a giant impact event that is postulated to have formed the Earth-Moon system, and the subsequent reaccretion of material in Earth orbit.', surfaceGeology: 'The geology of the Moon is quite different from that of Earth. The Moon lacks a true atmosphere, and the absence of free oxygen and water eliminates erosion due to weather. Instead, the surface is eroded much more slowly through the bombardment of the lunar surface by micrometeorites. It does not have any known form of plate tectonics, it has a lower gravity, and because of its small size, it cooled faster.' },

            { id: '3', name: 'Titan', image: 'image-titan.png', descrition: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.', avgDistance: '1.6 bil. km', estTravelTime: '7 years', internalStructure: 'Titan’s internal structure isn’t entirely known, but one model based on data from the Cassini-Huygens mission suggests Titan has five primary layers. The innermost layer is a core of rock (specifically, water-bearing silicate rock) about 2,500 miles (4,000 kilometers) in diameter. Surrounding the core is a shell of water ice—a special type called ice-VI that is only found at extremely high-pressures.', surfaceGeology: 'The surface of Titan has been described as "complex, fluid-processed, and geologically young". Titan has been around since the Solar System\'s formation, but its surface is much younger, between 100 million and 1 billion years old. Geological processes may have reshaped Titan\'s surface. Titan\'s atmosphere is four times as thick as Earth\'s, making it difficult for astronomical instruments to image its surface in the visible light spectrum.' }
        ];
    }

    getPlanets() {
        return [...this.planets];
    }

    getPlanet(name: string) {
        return this.planets.find(planet => planet.name.toLowerCase() === name);
    }

}