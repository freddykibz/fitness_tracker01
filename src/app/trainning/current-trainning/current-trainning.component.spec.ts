import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTrainningComponent } from './current-trainning.component';

describe('CurrentTrainningComponent', () => {
  let component: CurrentTrainningComponent;
  let fixture: ComponentFixture<CurrentTrainningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentTrainningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentTrainningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
