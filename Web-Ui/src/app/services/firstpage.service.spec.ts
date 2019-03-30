/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FirstpageService } from './firstpage.service';

describe('Service: Firstpage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirstpageService]
    });
  });

  it('should ...', inject([FirstpageService], (service: FirstpageService) => {
    expect(service).toBeTruthy();
  }));
});
