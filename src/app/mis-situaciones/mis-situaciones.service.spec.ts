import { TestBed } from '@angular/core/testing';

import { MisSituacionesService } from './mis-situaciones.service';

describe('MisSituacionesService', () => {
  let service: MisSituacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MisSituacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
