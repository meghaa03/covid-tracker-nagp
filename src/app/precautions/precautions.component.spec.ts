import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PrecautionsComponent } from './precautions.component';

describe('PrecautionsComponent', () => {
  let component: PrecautionsComponent;
  let fixture: ComponentFixture<PrecautionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecautionsComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecautionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have clean in precautions', () => {
    const element = fixture.debugElement.nativeElement.querySelector('p');
    const textToFind="Clean";
    expect(element.textContent).toContain(textToFind);
  });
});
