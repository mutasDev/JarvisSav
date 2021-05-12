import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { STTComponent } from './stt.component';

describe('STTComponent', () => {
  let component: STTComponent;
  let fixture: ComponentFixture<STTComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ STTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(STTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
