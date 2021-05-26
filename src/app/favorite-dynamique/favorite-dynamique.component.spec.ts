import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteDynamiqueComponent } from './favorite-dynamique.component';

describe('FavoriteDynamiqueComponent', () => {
  let component: FavoriteDynamiqueComponent;
  let fixture: ComponentFixture<FavoriteDynamiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteDynamiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteDynamiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
