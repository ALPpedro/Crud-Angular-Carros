import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateveiculoComponent } from './updateveiculo.component';

describe('UpdateveiculoComponent', () => {
  let component: UpdateveiculoComponent;
  let fixture: ComponentFixture<UpdateveiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateveiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateveiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
