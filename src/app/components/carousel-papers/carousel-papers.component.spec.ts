import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPapersComponent } from './carousel-papers.component';

describe('CarouselPapersComponent', () => {
  let component: CarouselPapersComponent;
  let fixture: ComponentFixture<CarouselPapersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselPapersComponent]
    });
    fixture = TestBed.createComponent(CarouselPapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
