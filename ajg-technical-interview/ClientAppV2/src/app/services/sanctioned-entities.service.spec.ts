import { TestBed } from '@angular/core/testing';

import { SanctionedEntitiesService } from './sanctioned-entities.service';

describe('SanctionedEntitiesService', () => {
  let service: SanctionedEntitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SanctionedEntitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
