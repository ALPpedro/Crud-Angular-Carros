import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemodeloComponent } from './updatemodelo.component';

describe('UpdatemodeloComponent', () => {
  let component: UpdatemodeloComponent;
  let fixture: ComponentFixture<UpdatemodeloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatemodeloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatemodeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
