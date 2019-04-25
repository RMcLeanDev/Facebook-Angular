import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerImageUpdateComponent } from './banner-image-update.component';

describe('BannerImageUpdateComponent', () => {
  let component: BannerImageUpdateComponent;
  let fixture: ComponentFixture<BannerImageUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerImageUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerImageUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
