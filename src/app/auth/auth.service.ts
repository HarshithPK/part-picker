import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, throwError } from 'rxjs';

import { User } from './user.model';

export interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    user = new BehaviorSubject<User>(null!);

    constructor(private http: HttpClient) {}

    signup(email: string, password: string) {
        const url =
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDBe30oWtWdGCeasoMTDA5u6iOA8U-azis';

        return this.http
            .post<AuthResponseData>(url, {
                email: email,
                password: password,
                returnSecureToken: true,
            })
            .pipe(
                catchError(this.handleError),
                tap((resData) => {
                    this.handleAuthentication(
                        resData.email,
                        resData.localId,
                        resData.idToken,
                        +resData.expiresIn
                    );
                })
            );
    }

    login(email: string, password: string) {
        const url =
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDBe30oWtWdGCeasoMTDA5u6iOA8U-azis';

        return this.http
            .post<AuthResponseData>(url, {
                email: email,
                password: password,
                returnSecureToken: true,
            })
            .pipe(
                catchError(this.handleError),
                tap((resData) => {
                    this.handleAuthentication(
                        resData.email,
                        resData.localId,
                        resData.idToken,
                        +resData.expiresIn
                    );
                })
            );
    }

    private handleAuthentication(
        email: string,
        userId: string,
        token: string,
        expiresIn: number
    ) {
        const expirationDate = new Date(
            new Date().getTime() + expiresIn * 1000
        );

        const user = new User(email, userId, token, expirationDate);

        this.user.next(user);
    }

    private handleError(errorRes: HttpErrorResponse) {
        let errorMessage = 'An Unknown Error Occured!!';

        if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage);
        }

        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'The provided email already exists.';
                break;

            case 'EMAIL_NOT_FOUND':
                errorMessage = 'The provided email does not exist.';
                break;

            case 'INVALID_PASSWORD':
                errorMessage = 'The password provided is invalid.';
                break;
        }

        return throwError(errorMessage);
    }
}
