/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UrequisicaoService } from './Urequisicao.service';

describe('Service: Urequisicao', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UrequisicaoService]
    });
  });

  it('should ...', inject([UrequisicaoService], (service: UrequisicaoService) => {
    expect(service).toBeTruthy();
  }));
});
