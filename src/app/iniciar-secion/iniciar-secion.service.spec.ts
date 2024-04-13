import { TestBed } from '@angular/core/testing';

import { IniciarSecionService } from './iniciar-secion.service';

describe('IniciarSecionService', () => {
  let service: IniciarSecionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IniciarSecionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
