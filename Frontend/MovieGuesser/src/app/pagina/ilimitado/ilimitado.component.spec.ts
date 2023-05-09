import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IlimitadoComponent } from './ilimitado.component';

describe('IlimitadoComponent', () => {
  let component: IlimitadoComponent;
  let fixture: ComponentFixture<IlimitadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IlimitadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IlimitadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
