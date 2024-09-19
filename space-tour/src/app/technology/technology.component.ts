import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Technology } from '../models/technology.model';
import { TechnologyService } from '../services/technology.service';

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [NgFor],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.css'
})
export class TechnologyComponent {
    technologies: Technology[] = [];
    selectedTechnology: Technology;

    constructor(private technologyService: TechnologyService) {
      this.technologies = technologyService.getTechnologies();
      this.selectedTechnology = this.technologies[0];
    }

    onSelect(selectedTechnology: Technology) {
      this.selectedTechnology = selectedTechnology;
    }

}
