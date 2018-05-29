import { TestBed, inject } from '@angular/core/testing';

import { SmartAuthService } from './smart-auth.service';

describe('SmartAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SmartAuthService]
    });
  });

  it('should be created', inject([SmartAuthService], (service: SmartAuthService) => {
    expect(service).toBeTruthy();
  }));
});
