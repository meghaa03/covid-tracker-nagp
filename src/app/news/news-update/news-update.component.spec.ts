import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NewsUpdateComponent } from './news-update.component';
import { NewsService } from 'src/app/services/news.services';

describe('NewsUpdateComponent', () => {
    let component: NewsUpdateComponent;
    let fixture: ComponentFixture<NewsUpdateComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule,
                FormsModule],
            declarations: [NewsUpdateComponent],
            providers: [NewsService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NewsUpdateComponent);
        component = fixture.componentInstance;
        component.ngOnInit();
        fixture.detectChanges();        
    });

    it('form should be valid', () => {
        component.newsUpdateForm.controls['title'].setValue('abc');
        component.newsUpdateForm.controls['description'].setValue('xyz');
        component.newsUpdateForm.controls['summary'].setValue('pqr');
        component.newsUpdateForm.controls['fullNews'].setValue('lmn');
        expect(component.newsUpdateForm.valid).toBeTruthy();
    });

    it('form should be invalid', () => {
            expect(component.newsUpdateForm.valid).toBeFalsy();
          });

});
