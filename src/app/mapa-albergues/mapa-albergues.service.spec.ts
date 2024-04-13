import { TestBed } from '@angular/core/testing';

import { MapaAlberguesService } from './mapa-albergues.service';

describe('MapaAlberguesService', () => {
  let service: MapaAlberguesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapaAlberguesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
