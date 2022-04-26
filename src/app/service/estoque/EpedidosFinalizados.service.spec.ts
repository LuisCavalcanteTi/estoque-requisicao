/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EpedidosFinalizadosService } from './EpedidosFinalizados.service';

describe('Service: EpedidosFinalizados', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EpedidosFinalizadosService]
    });
  });

  it('should ...', inject([EpedidosFinalizadosService], (service: EpedidosFinalizadosService) => {
    expect(service).toBeTruthy();
  }));
});
