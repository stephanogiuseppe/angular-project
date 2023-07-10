import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalImageComponent } from './personal-image.component';

describe('PersonalImageComponent', () => {
  let component: PersonalImageComponent;
  let fixture: ComponentFixture<PersonalImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalImageComponent]
    });
    fixture = TestBed.createComponent(PersonalImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
