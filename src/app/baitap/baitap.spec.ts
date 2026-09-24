import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Baitap } from './baitap';

describe('Baitap', () => {
  let component: Baitap;
  let fixture: ComponentFixture<Baitap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Baitap],
    }).compileComponents();

    fixture = TestBed.createComponent(Baitap);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
