import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageRootComponent } from './garage-root.component';

describe('GarageRootComponent', () => {
  let component: GarageRootComponent;
  let fixture: ComponentFixture<GarageRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarageRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarageRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
