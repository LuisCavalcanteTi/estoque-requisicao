import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoquePedidosImpressosComponent } from './estoque-pedidos-impressos.component';

describe('EstoquePedidosImpressosComponent', () => {
  let component: EstoquePedidosImpressosComponent;
  let fixture: ComponentFixture<EstoquePedidosImpressosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstoquePedidosImpressosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstoquePedidosImpressosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
