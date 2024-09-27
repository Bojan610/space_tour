/* tslint:disable:no-unused-variable */

import { TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { DestinationService } from '../../services/destination.service';
import { PlanetComponent } from './planet.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('App: PlanetComponent', () => {
  let paramsSubject: Subject<any>;

  beforeEach(() => {

    paramsSubject = new BehaviorSubject({ planet: 'mars' }); // initial value

    TestBed.configureTestingModule({
      declarations: [
      ],
      imports: [
        NoopAnimationsModule    // Add NoopAnimationsModule to disable animations during testing
      ],
      providers: [
        // Provide a mock ActivatedRoute with mock data
        {
          provide: ActivatedRoute,
          useValue: {
            params: paramsSubject.asObservable() // Mock the dynamic route param
          }
        },
        {
            provide: DestinationService
        }
      ]
    });
  });

  it('should create the component', waitForAsync(() => {
    let fixture = TestBed.createComponent(PlanetComponent);
    let component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

  // it('should use planet from the service', waitForAsync(() => {
  //   let fixture = TestBed.createComponent(PlanetComponent);
  //   let component = fixture.debugElement.componentInstance;
  //   let destinationService = fixture.debugElement.injector.get(DestinationService);
  //   spyOn(destinationService, 'getPlanet');

  //   paramsSubject.next({ planetName: 'mars' });
  //   fixture.detectChanges();
  //   expect(destinationService.getPlanet).toHaveBeenCalledWith('mars');

  // }));
});
