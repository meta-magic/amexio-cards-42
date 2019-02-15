import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyNowCardComponent } from './buy-now-card.component';

describe('BuyNowCardComponent', () => {
  let component: BuyNowCardComponent;
  let fixture: ComponentFixture<BuyNowCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyNowCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyNowCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
