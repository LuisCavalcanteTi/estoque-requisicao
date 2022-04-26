/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EpedidosImpressosService } from './EpedidosImpressos.service';

describe('Service: EpedidosImpressos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EpedidosImpressosService]
    });
  });

  it('should ...', inject([EpedidosImpressosService], (service: EpedidosImpressosService) => {
    expect(service).toBeTruthy();
  }));
});
