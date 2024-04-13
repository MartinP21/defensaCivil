import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SituacionPage } from './situacion.page';

describe('SituacionPage', () => {
  let component: SituacionPage;
  let fixture: ComponentFixture<SituacionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SituacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
