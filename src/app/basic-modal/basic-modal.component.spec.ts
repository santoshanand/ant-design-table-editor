import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { BasicModalComponent } from './basic-modal.component';

describe('BasicModalComponent', () => {
  let component: BasicModalComponent;
  let fixture: ComponentFixture<BasicModalComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
