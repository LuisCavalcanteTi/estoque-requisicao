import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoquePedidosFinalizadosComponent } from './estoque-pedidos-finalizados.component';

describe('EstoquePedidosFinalizadosComponent', () => {
  let component: EstoquePedidosFinalizadosComponent;
  let fixture: ComponentFixture<EstoquePedidosFinalizadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstoquePedidosFinalizadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstoquePedidosFinalizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
