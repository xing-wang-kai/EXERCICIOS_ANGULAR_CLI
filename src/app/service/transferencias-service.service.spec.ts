import { TestBed } from '@angular/core/testing';

import { TransferenciasServiceService } from './transferencias-service.service';

describe('TransferenciasServiceService', () => {
  let service: TransferenciasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferenciasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
