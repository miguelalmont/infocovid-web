import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolutionGraphicsComponent } from './evolution-graphics.component';

describe('EvolutionGraphicsComponent', () => {
  let component: EvolutionGraphicsComponent;
  let fixture: ComponentFixture<EvolutionGraphicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvolutionGraphicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolutionGraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
