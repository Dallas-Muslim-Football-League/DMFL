import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatLeaderCardComponent } from './stat-leader-card.component';

describe('StatLeaderCardComponent', () => {
  let component: StatLeaderCardComponent;
  let fixture: ComponentFixture<StatLeaderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatLeaderCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatLeaderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
