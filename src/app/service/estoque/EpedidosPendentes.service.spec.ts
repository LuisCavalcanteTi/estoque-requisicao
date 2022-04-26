/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EpedidosPendentesService } from './EpedidosPendentes.service';

describe('Service: EpedidosPendentes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EpedidosPendentesService]
    });
  });

  it('should ...', inject([EpedidosPendentesService], (service: EpedidosPendentesService) => {
    expect(service).toBeTruthy();
  }));
});
