import { Component, OnDestroy, OnInit } from '@angular/core';
import { CrewService } from '../services/crew.service';
import { CrewMember } from '../models/crewMember.model';
import { NgFor } from '@angular/common';
import { interval } from 'rxjs';

@Component({
  selector: 'app-crew',
  standalone: true,
  imports: [NgFor],
  templateUrl: './crew.component.html',
  styleUrl: './crew.component.css'
})
export class CrewComponent implements OnInit, OnDestroy {
  crew: CrewMember[] = [];
  currentIndex: number = 0;
  intervalId: any;

  constructor(private crewService: CrewService) {
    this.crew = crewService.getCrew();
  }

  ngOnInit(): void {
    this.startInterval();
  }

  startInterval() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }
  
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.crew.length;
  }

  onSelectSlide(id: string) {
    this.currentIndex = +id;
    clearInterval(this.intervalId);
    this.startInterval();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

}
