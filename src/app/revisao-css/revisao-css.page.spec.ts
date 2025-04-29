import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RevisaoCssPage } from './revisao-css.page';

describe('RevisaoCssPage', () => {
  let component: RevisaoCssPage;
  let fixture: ComponentFixture<RevisaoCssPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisaoCssPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
