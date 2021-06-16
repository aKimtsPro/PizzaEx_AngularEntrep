import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactHistoComponent } from './contact-histo.component';

describe('ContactHistoComponent', () => {
  let component: ContactHistoComponent;
  let fixture: ComponentFixture<ContactHistoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactHistoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactHistoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
