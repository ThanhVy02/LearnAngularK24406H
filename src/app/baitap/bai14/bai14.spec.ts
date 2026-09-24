import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bai14 } from './bai14';

describe('Bai14', () => {
  let component: Bai14;
  let fixture: ComponentFixture<Bai14>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Bai14],
    }).compileComponents();

    fixture = TestBed.createComponent(Bai14);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
