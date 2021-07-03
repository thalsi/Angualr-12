import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryServesComponent } from './try-serves.component';

describe('TryServesComponent', () => {
  let component: TryServesComponent;
  let fixture: ComponentFixture<TryServesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TryServesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TryServesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
