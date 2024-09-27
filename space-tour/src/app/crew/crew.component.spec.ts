/* tslint:disable:no-unused-variable */

import { fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { CrewService } from '../services/crew.service';
import { CrewComponent } from './crew.component';

describe('App: CrewComponent', () => {
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
            provide: CrewService
        }
      ]
    });
  });

  it('should create the component', waitForAsync(() => {
    let fixture = TestBed.createComponent(CrewComponent);
    let component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

  it('should use crew from the service', waitForAsync(() => {
    let fixture = TestBed.createComponent(CrewComponent);
    let component = fixture.debugElement.componentInstance;
    let crewService = fixture.debugElement.injector.get(CrewService);
    expect(crewService.getCrew()).toEqual(component.crew);
  }));

  it('should test timer function', fakeAsync(() => {
    let fixture = TestBed.createComponent(CrewComponent);
    let component = fixture.debugElement.componentInstance;
    spyOn(component, 'nextSlide');
    component.ngOnInit();
    tick(5000);
    expect(component.nextSlide).toHaveBeenCalledTimes(1);
    tick(10000);
    expect(component.nextSlide).toHaveBeenCalledTimes(3);
    clearInterval(component.intervalId);
  }));

  it('should test onSelectSlide method', fakeAsync(() => {
    let fixture = TestBed.createComponent(CrewComponent);
    let component = fixture.debugElement.componentInstance;
    spyOn(component, 'nextSlide');
    component.onSelectSlide('2');
    expect(component.currentIndex).toBe(2);
    clearInterval(component.intervalId);
  }));
});
