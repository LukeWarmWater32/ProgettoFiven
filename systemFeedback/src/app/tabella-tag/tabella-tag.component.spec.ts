import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabellaTagComponent } from './tabella-tag.component';

describe('TabellaTagComponent', () => {
  let component: TabellaTagComponent;
  let fixture: ComponentFixture<TabellaTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabellaTagComponent]
    });
    fixture = TestBed.createComponent(TabellaTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
