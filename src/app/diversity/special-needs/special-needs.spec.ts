import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialNeeds } from './special-needs';

describe('SpecialNeeds', () => {
  let component: SpecialNeeds;
  let fixture: ComponentFixture<SpecialNeeds>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialNeeds]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialNeeds);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
