import { TestBed } from '@angular/core/testing';

import { AlberguesService } from './albergues.service';

describe('AlberguesService', () => {
  let service: AlberguesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlberguesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
