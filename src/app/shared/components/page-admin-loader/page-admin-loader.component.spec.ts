import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAdminLoaderComponent } from './page-admin-loader.component';

describe('PageAdminLoaderComponent', () => {
  let component: PageAdminLoaderComponent;
  let fixture: ComponentFixture<PageAdminLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAdminLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAdminLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
