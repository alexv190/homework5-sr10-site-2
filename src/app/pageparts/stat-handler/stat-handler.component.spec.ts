import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatHandlerComponent } from './stat-handler.component';

describe('StatHandlerComponent', () => {
  let component: StatHandlerComponent;
  let fixture: ComponentFixture<StatHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatHandlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
