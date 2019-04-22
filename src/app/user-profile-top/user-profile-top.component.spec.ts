import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileTopComponent } from './user-profile-top.component';

describe('UserProfileTopComponent', () => {
  let component: UserProfileTopComponent;
  let fixture: ComponentFixture<UserProfileTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
