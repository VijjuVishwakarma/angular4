import { TestBed, inject } from '@angular/core/testing';

import { ActressService } from './actress.service';

describe('ActressService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActressService]
    });
  });

  it('should be created', inject([ActressService], (service: ActressService) => {
    expect(service).toBeTruthy();
  }));
});
