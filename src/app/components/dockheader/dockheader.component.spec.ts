import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockheaderComponent } from './dockheader.component';

describe('DockheaderComponent', () => {
  let component: DockheaderComponent;
  let fixture: ComponentFixture<DockheaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DockheaderComponent]
    });
    fixture = TestBed.createComponent(DockheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
