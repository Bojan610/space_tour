/* tslint:disable:no-unused-variable */

import { TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { PlanetsComponent } from './planets.component';
import { DestinationService } from '../../services/destination.service';

describe('App: PlanetsComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
      ],
      providers: [
        // Provide a mock ActivatedRoute with mock data
        {
          provide: ActivatedRoute,
          useValue: {
            // Mock the data, params, or queryParams observables as needed
            snapshot: {
              paramMap: {
                get: () => '123', // Mock route parameter
              },
            },
            queryParams: of({ testParam: 'testValue' }), // Mock query params as observables
          },
        },
        {
            provide: DestinationService
        }
      ]
    });
  });

  it('should create the component', waitForAsync(() => {
    let fixture = TestBed.createComponent(PlanetsComponent);
    let component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

  it('should use planets from the service', waitForAsync(() => {
    let fixture = TestBed.createComponent(PlanetsComponent);
    let component = fixture.debugElement.componentInstance;
    let destinationService = fixture.debugElement.injector.get(DestinationService);
    fixture.detectChanges();
    expect(destinationService.getPlanets()).toEqual(component.planets);
  }));
});
