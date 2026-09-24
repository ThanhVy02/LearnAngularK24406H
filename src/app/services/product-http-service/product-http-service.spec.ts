import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductHttpService } from './product-http-service';

describe('ProductHttpService', () => {
  let component: ProductHttpService;
  let fixture: ComponentFixture<ProductHttpService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductHttpService],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductHttpService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
