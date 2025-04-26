import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstastripComponent } from './instastrip.component';

describe('InstastripComponent', () => {
  let component: InstastripComponent;
  let fixture: ComponentFixture<InstastripComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstastripComponent]
    });
    fixture = TestBed.createComponent(InstastripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
