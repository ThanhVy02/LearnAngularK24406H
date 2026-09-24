import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bai13 } from './bai13';

describe('Bai13', () => {
  let component: Bai13;
  let fixture: ComponentFixture<Bai13>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Bai13],
    }).compileComponents();

    fixture = TestBed.createComponent(Bai13);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
