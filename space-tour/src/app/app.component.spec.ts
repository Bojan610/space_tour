/* tslint:disable:no-unused-variable */

import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('App: AppComponent', () => {
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

  it('should create the app', waitForAsync(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
