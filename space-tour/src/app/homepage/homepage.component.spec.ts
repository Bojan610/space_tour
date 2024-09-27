/* tslint:disable:no-unused-variable */

import { TestBed, waitForAsync } from '@angular/core/testing';
import { HomepageComponent } from './homepage.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('App: HomepageComponent', () => {
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
        }
      ]
    });
  });

  it('should create the component', waitForAsync(() => {
    let fixture = TestBed.createComponent(HomepageComponent);
    let component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

  it('should render title in a h1 tag', waitForAsync(() => {
    let fixture = TestBed.createComponent(HomepageComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Space');
  }));
});
