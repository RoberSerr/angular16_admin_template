import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSidenavLightComponent } from './layout-sidenav-light.component';

describe('LayoutSidenavLightComponent', () => {
  let component: LayoutSidenavLightComponent;
  let fixture: ComponentFixture<LayoutSidenavLightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LayoutSidenavLightComponent]
    });
    fixture = TestBed.createComponent(LayoutSidenavLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
