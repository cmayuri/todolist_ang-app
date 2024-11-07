import { TestBed } from '@angular/core/testing';

import { TwowayService } from './twoway.service';

describe('TwowayService', () => {
  let service: TwowayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwowayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
