import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoquePedidosPendentesComponent } from './estoque-pedidos-pendentes.component';

describe('EstoquePedidosPendentesComponent', () => {
  let component: EstoquePedidosPendentesComponent;
  let fixture: ComponentFixture<EstoquePedidosPendentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstoquePedidosPendentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstoquePedidosPendentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
