import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioPedidosPendentesComponent } from './usuario-pedidos-pendentes.component';

describe('UsuarioPedidosPendentesComponent', () => {
  let component: UsuarioPedidosPendentesComponent;
  let fixture: ComponentFixture<UsuarioPedidosPendentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioPedidosPendentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioPedidosPendentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
