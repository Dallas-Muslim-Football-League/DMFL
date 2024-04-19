import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RosterDetailComponent } from './roster-detail.component';

describe('RosterDetailComponent', () => {
  let component: RosterDetailComponent;
  let fixture: ComponentFixture<RosterDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RosterDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RosterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
