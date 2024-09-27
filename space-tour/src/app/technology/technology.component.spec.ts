/* tslint:disable:no-unused-variable */

import { TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { TechnologyService } from '../services/technology.service';
import { TechnologyComponent } from './technology.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('App: TechnologyComponent', () => {
  beforeEach(() => {
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
            provide: TechnologyService
        }
      ]
    });
  });

  it('should create the component', waitForAsync(() => {
    let fixture = TestBed.createComponent(TechnologyComponent);
    let component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

  it('should use technologies from the service', waitForAsync(() => {
    let fixture = TestBed.createComponent(TechnologyComponent);
    let component = fixture.debugElement.componentInstance;
    let technologyService = fixture.debugElement.injector.get(TechnologyService);
    fixture.detectChanges();
    expect(technologyService.getTechnologies()).toEqual(component.technologies);
  }));
  it('should initialy selected technology be technology with the name \'Launch vehicle\'', waitForAsync(() => {
    let fixture = TestBed.createComponent(TechnologyComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Launch vehicle');
  }));

  it('should test onSelect method', waitForAsync(() => {
    let fixture = TestBed.createComponent(TechnologyComponent);
    let component = fixture.debugElement.componentInstance;
    let mockObject = {id: '2', name: 'Space capsule', description: '', image: ''};
    component.onSelect(mockObject);
    expect(component.selectedTechnology.name).toEqual('Space capsule');
  }));
});
