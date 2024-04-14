import { TestBed } from '@angular/core/testing';

import { NoticiaEspecificasService } from './noticia-especificas.service';

describe('NoticiaEspecificasService', () => {
  let service: NoticiaEspecificasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoticiaEspecificasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
