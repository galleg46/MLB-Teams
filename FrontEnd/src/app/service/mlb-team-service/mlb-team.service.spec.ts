import { TestBed } from '@angular/core/testing';

import { MlbTeamServiceService } from './mlb-team.service';

describe('MlbTeamServiceService', () => {
  let service: MlbTeamServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MlbTeamServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
