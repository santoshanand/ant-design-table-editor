import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FixedTableComponent } from './fixed-table.component';

describe('FixedTableComponent', () => {
  let component: FixedTableComponent;
  let fixture: ComponentFixture<FixedTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
