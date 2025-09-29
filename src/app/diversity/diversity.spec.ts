import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Diversity } from './diversity';

describe('Diversity', () => {
  let component: Diversity;
  let fixture: ComponentFixture<Diversity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Diversity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Diversity);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
