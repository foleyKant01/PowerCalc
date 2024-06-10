import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewPropertyPage } from './view-property.page';

describe('ViewPropertyPage', () => {
  let component: ViewPropertyPage;
  let fixture: ComponentFixture<ViewPropertyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPropertyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
