import { TestBed } from '@angular/core/testing';

import { BaseDatosPeliculasService } from './base-datos-peliculas.service';

describe('BaseDatosPeliculasService', () => {
  let service: BaseDatosPeliculasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseDatosPeliculasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
