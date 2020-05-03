import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUserDetails, ILoginDetails } from '../common/interfaces/interfaces';

@Injectable({
    providedIn: 'root'
})

export class CredentialService {

    adminDetails: IUserDetails[] = [];

    isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.hasToken());

    isLoggedIn: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() {
        this.adminDetails.push({
            userId: 1,
            emailId: "adminuser@nagarro.com",
            password: "admin"
        });
    }

    private hasToken(): boolean {
        return !!sessionStorage["userid"];
    }

    SaveCredentials = (loginInfo: IUserDetails): void => {
        sessionStorage["credentials"] = window.btoa(loginInfo.emailId + ":" + loginInfo.password);
        sessionStorage["userid"] = loginInfo.userId;
        this.isLoggedIn.emit(true);
        this.isUserLoggedIn.next(true);
    }

    GetCredentials = (): string => {
        return window.atob(sessionStorage["credentials"] ? sessionStorage["credentials"] : '');
    }

    AuthenticateUser(loginInfo: ILoginDetails): IUserDetails {
        return this.adminDetails.find(admin => admin.emailId == loginInfo.emailId && admin.password == loginInfo.password);
    }

    GetUserId = (): number => {
        return sessionStorage["userid"];
    }

    ClearCredentials = (): void => {
        sessionStorage.removeItem("credentials");
        sessionStorage.removeItem("userid");
        
        this.isLoggedIn.emit(false);
        this.isUserLoggedIn.next(false);
    }

    isLoggedInUser(): Observable<boolean> {
        return this.isUserLoggedIn.asObservable();
    }

    canActivate(): boolean {
        if (!this.isUserLoggedIn.value) {
            return false;
        }
        else {
            return true;
        }
    }
}