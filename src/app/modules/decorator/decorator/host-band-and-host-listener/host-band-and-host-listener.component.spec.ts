import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostBandAndHostListenerComponent } from './host-band-and-host-listener.component';

describe('HostBandAndHostListenerComponent', () => {
  let component: HostBandAndHostListenerComponent;
  let fixture: ComponentFixture<HostBandAndHostListenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostBandAndHostListenerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostBandAndHostListenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
