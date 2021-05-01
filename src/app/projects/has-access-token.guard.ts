import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { Logger } from '@core';
import { CredentialsService } from '@app/auth';

const log = new Logger('HasAccessTokenGuard');

@Injectable({
  providedIn: 'root',
})
export class HasAccessTokenGuard implements CanActivate {
  constructor(private credentialsService: CredentialsService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.credentialsService.isAuthenticated()) {
      return true;
    }

    log.debug('Not authenticated, redirecting and adding redirect url...');
    this.router.navigate(['/login'], { replaceUrl: true });
    return false;
  }
}
