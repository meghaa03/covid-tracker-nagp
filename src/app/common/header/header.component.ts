import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CredentialService } from 'src/app/services/credentials.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls:['./header.component.css']
})
export class HeaderComponent {

    isUserLoggedIn: boolean = false;

    constructor(private router: Router, private _credentialService: CredentialService) {
        this._credentialService.isLoggedIn.subscribe((isLoggedIn: boolean) => {
            this.isUserLoggedIn = isLoggedIn;
        })
    }

    Logout() {
        this._credentialService.ClearCredentials();
        this.router.navigate(['/dashboard']);
    }
}