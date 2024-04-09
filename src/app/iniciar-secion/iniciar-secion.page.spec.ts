import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IniciarSecionPage } from './iniciar-secion.page';

describe('IniciarSecionPage', () => {
  let component: IniciarSecionPage;
  let fixture: ComponentFixture<IniciarSecionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciarSecionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
