import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastTrainningComponent } from './past-trainning.component';

describe('PastTrainningComponent', () => {
  let component: PastTrainningComponent;
  let fixture: ComponentFixture<PastTrainningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastTrainningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastTrainningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
