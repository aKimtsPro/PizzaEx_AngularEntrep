import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPateComponent } from './menu-pate.component';

describe('MenuPateComponent', () => {
  let component: MenuPateComponent;
  let fixture: ComponentFixture<MenuPateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
