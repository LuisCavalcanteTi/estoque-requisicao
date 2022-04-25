import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioPedidosFinalizadosComponent } from './usuario-pedidos-finalizados.component';

describe('UsuarioPedidosFinalizadosComponent', () => {
  let component: UsuarioPedidosFinalizadosComponent;
  let fixture: ComponentFixture<UsuarioPedidosFinalizadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioPedidosFinalizadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioPedidosFinalizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
