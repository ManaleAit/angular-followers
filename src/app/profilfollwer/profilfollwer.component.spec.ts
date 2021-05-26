import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilfollwerComponent } from './profilfollwer.component';

describe('ProfilfollwerComponent', () => {
  let component: ProfilfollwerComponent;
  let fixture: ComponentFixture<ProfilfollwerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilfollwerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilfollwerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
