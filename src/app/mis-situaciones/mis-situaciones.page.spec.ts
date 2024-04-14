import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisSituacionesPage } from './mis-situaciones.page';

describe('MisSituacionesPage', () => {
  let component: MisSituacionesPage;
  let fixture: ComponentFixture<MisSituacionesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MisSituacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
