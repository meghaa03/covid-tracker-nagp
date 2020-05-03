import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { NewsDisplayComponent } from './news-display.component';

describe('NewsDisplayComponent', () => {

  let component: NewsDisplayComponent;
  let fixture: ComponentFixture<NewsDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        NewsDisplayComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsDisplayComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create news display component', () => {
    expect(component).toBeTruthy();
  });

  it('should have news in news display heading', () => {
    const element = fixture.debugElement.nativeElement.querySelector('h3');
    const textToFind="News";
    expect(element.textContent).toContain(textToFind);
  });

});
