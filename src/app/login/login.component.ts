import { Component, OnInit } from '@angular/core';
import { ILoginDetails, IUserDetails } from 'src/app/common/interfaces/interfaces';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CredentialService } from '../services/credentials.service';
import { LoginDetails } from '../common/classes/classes';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    providers:[MessageService],
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    invalidCredentialsMsg: string;

    constructor(private _credentialService: CredentialService, private _router: Router, private messageService: MessageService) {

    }
    ngOnInit(): void {
        this.loginForm = new FormGroup({
            emailId: new FormControl('', [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'), Validators.required]),
            password: new FormControl('', [Validators.required])
        });
    }

    login() {

        var loginDetails: ILoginDetails = new LoginDetails(this.loginForm.value.emailId, this.loginForm.value.password);

        var loggedInUserDetails: IUserDetails = this._credentialService.AuthenticateUser(loginDetails);

        if (loggedInUserDetails) {
            this._credentialService.SaveCredentials(loggedInUserDetails);
            this._router.navigate(['dashboard']);
            this.invalidCredentialsMsg="";
        }
        else {
            console.log("Unable to login user");
            this.messageService.add({severity:'error', summary:'Invalid credentianls', detail:'Login failed'});
            this.invalidCredentialsMsg="Invalid credentianls";
        }
        this.loginForm.reset();
    }

}