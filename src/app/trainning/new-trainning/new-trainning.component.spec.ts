import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTrainningComponent } from './new-trainning.component';

describe('NewTrainningComponent', () => {
  let component: NewTrainningComponent;
  let fixture: ComponentFixture<NewTrainningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTrainningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTrainningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
