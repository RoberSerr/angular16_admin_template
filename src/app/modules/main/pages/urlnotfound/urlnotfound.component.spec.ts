import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlnotfoundComponent } from './urlnotfound.component';

describe('UrlnotfoundComponent', () => {
  let component: UrlnotfoundComponent;
  let fixture: ComponentFixture<UrlnotfoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UrlnotfoundComponent]
    });
    fixture = TestBed.createComponent(UrlnotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
