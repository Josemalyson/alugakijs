/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AlugarVeiculoService } from './alugar-veiculo.service';

describe('Service: AlugarVeiculo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlugarVeiculoService]
    });
  });

  it('should ...', inject([AlugarVeiculoService], (service: AlugarVeiculoService) => {
    expect(service).toBeTruthy();
  }));
});
