import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapaAlberguesPage } from './mapa-albergues.page';

describe('MapaAlberguesPage', () => {
  let component: MapaAlberguesPage;
  let fixture: ComponentFixture<MapaAlberguesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaAlberguesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
