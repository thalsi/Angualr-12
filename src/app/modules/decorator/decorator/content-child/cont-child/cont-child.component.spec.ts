import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContChildComponent } from './cont-child.component';

describe('ContChildComponent', () => {
  let component: ContChildComponent;
  let fixture: ComponentFixture<ContChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
