/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthIntersepterService } from './auth-intersepter.service';

describe('Service: AuthIntersepter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthIntersepterService]
    });
  });

  it('should ...', inject([AuthIntersepterService], (service: AuthIntersepterService) => {
    expect(service).toBeTruthy();
  }));
});
