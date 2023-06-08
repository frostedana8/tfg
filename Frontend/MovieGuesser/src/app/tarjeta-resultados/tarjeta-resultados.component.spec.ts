import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaResultadosComponent } from './tarjeta-resultados.component';

describe('TarjetaResultadosComponent', () => {
  let component: TarjetaResultadosComponent;
  let fixture: ComponentFixture<TarjetaResultadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaResultadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
