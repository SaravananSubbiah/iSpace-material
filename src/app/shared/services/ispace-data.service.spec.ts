import { TestBed } from '@angular/core/testing';

import { IspaceDataService } from './ispace-data.service';

describe('IspaceDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IspaceDataService = TestBed.get(IspaceDataService);
    expect(service).toBeTruthy();
  });
});
