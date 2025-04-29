import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RevisaoCssLayoutPage } from './revisao-css-layout.page';

describe('RevisaoCssLayoutPage', () => {
  let component: RevisaoCssLayoutPage;
  let fixture: ComponentFixture<RevisaoCssLayoutPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisaoCssLayoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
