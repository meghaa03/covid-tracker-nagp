import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { CredentialService } from '../services/credentials.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule,
                ReactiveFormsModule,
                FormsModule],
            declarations: [LoginComponent],
            providers: [CredentialService]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        component.ngOnInit();
        fixture.detectChanges();        
    });

    it('form should be valid', () => {
        component.loginForm.controls['emailId'].setValue('abc@nagarro.com');
        component.loginForm.controls['password'].setValue('password123');
        expect(component.loginForm.valid).toBeTruthy();
    });

    it('form should be invalid', () => {
        expect(component.loginForm.valid).toBeFalsy();
    });

});
