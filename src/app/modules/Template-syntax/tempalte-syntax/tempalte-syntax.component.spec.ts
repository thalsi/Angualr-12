import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempalteSyntaxComponent } from './tempalte-syntax.component';

describe('TempalteSyntaxComponent', () => {
  let component: TempalteSyntaxComponent;
  let fixture: ComponentFixture<TempalteSyntaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempalteSyntaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempalteSyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
