import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryItemAddComponent } from './gallery-item-add.component';

describe('GalleryItemAddComponent', () => {
  let component: GalleryItemAddComponent;
  let fixture: ComponentFixture<GalleryItemAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryItemAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryItemAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
