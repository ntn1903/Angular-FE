import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { LoginService } from '../auth/login/login.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService extends BaseService implements CanActivate {

    constructor(
    ) {
        super();
    }

    canActivate(): boolean {
        return localStorage.getItem('token') != null;
    }
}