import { NgFor, NgIf } from '@angular/common';
import { Component, SimpleChanges } from '@angular/core';
import { Technology } from '../models/technology.model';
import { TechnologyService } from '../services/technology.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.css',
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 1,
      })),
      state('closed', style({
        opacity: 0,
      })),
      transition('closed => open', [
        animate('0.5s')
      ])
    ])
  ]
})
export class TechnologyComponent {
    technologies: Technology[] = [];
    selectedTechnology: Technology;
    state = 'open';

    constructor(private technologyService: TechnologyService) {
      this.technologies = technologyService.getTechnologies();
      this.selectedTechnology = this.technologies[0];
    }

    onSelect(selectedTechnology: Technology) {
      this.state == 'closed' ? this.state = 'open' : this.state = 'closed';    
      this.selectedTechnology = selectedTechnology;
      setTimeout(() => {
        this.state == 'closed' ? this.state = 'open' : this.state = 'closed';
      }, 0.5);
    }

}
