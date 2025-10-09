import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingsDetailComponent } from './standings.component';

describe('StandingsDetailComponent', () => {
  let component: StandingsDetailComponent;
  let fixture: ComponentFixture<StandingsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandingsDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandingsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
