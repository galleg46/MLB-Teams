import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerInfoPageComponent } from './player-info-page.component';

describe('PlayerInfoPageComponent', () => {
  let component: PlayerInfoPageComponent;
  let fixture: ComponentFixture<PlayerInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerInfoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
