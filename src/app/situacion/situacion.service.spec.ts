import { TestBed } from '@angular/core/testing';

import { SituacionService } from './situacion.service';

describe('SituacionService', () => {
  let service: SituacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SituacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
