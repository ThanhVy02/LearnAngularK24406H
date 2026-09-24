import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bai18 } from './bai18';

describe('Bai18', () => {
  let component: Bai18;
  let fixture: ComponentFixture<Bai18>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Bai18],
    }).compileComponents();

    fixture = TestBed.createComponent(Bai18);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
