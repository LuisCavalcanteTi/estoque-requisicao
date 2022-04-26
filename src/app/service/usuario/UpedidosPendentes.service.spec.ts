/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UpedidosPendentesService } from './UpedidosPendentes.service';

describe('Service: UpedidosPendentes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpedidosPendentesService]
    });
  });

  it('should ...', inject([UpedidosPendentesService], (service: UpedidosPendentesService) => {
    expect(service).toBeTruthy();
  }));
});
