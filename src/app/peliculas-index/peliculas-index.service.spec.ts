import { TestBed } from '@angular/core/testing';

import { PeliculasIndexService } from './peliculas-index.service';

describe('PeliculasIndexService', () => {
  let service: PeliculasIndexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeliculasIndexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
