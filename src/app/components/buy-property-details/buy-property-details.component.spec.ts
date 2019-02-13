import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyPropertyDetailsComponent } from './buy-property-details.component';

describe('BuyPropertyDetailsComponent', () => {
  let component: BuyPropertyDetailsComponent;
  let fixture: ComponentFixture<BuyPropertyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyPropertyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyPropertyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
