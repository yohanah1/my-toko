import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEffectivenessComponent } from './product-effectiveness.component';

describe('ProductEffectivenessComponent', () => {
  let component: ProductEffectivenessComponent;
  let fixture: ComponentFixture<ProductEffectivenessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductEffectivenessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEffectivenessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
