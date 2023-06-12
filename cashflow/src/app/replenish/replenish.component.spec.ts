import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplenishComponent } from './replenish.component';

describe('ReplenishComponent', () => {
  let component: ReplenishComponent;
  let fixture: ComponentFixture<ReplenishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplenishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReplenishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
