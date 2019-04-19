import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewprofileimageComponent } from './newprofileimage.component';

describe('NewprofileimageComponent', () => {
  let component: NewprofileimageComponent;
  let fixture: ComponentFixture<NewprofileimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewprofileimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewprofileimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
