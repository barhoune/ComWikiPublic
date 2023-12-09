import { TestBed } from '@angular/core/testing';

import { ComicvineapiService } from './comicvineapi.service';

describe('ComicvineapiService', () => {
  let service: ComicvineapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComicvineapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
