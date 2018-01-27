import { TestBed, inject } from '@angular/core/testing';

import { CarDataServiceService } from './car-data-service.service';

describe('CarDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarDataServiceService]
    });
  });

  it('should be created', inject([CarDataServiceService], (service: CarDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
