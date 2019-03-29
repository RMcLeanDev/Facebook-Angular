import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentLoginsComponent } from './recent-logins.component';

describe('RecentLoginsComponent', () => {
  let component: RecentLoginsComponent;
  let fixture: ComponentFixture<RecentLoginsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentLoginsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentLoginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
