/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VerbService } from './verb.service';

describe('VerbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VerbService]
    });
  });

  it('should ...', inject([VerbService], (service: VerbService) => {
    expect(service).toBeTruthy();
  }));
});
