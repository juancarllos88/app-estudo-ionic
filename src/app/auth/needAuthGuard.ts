import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';


@Injectable()
export class NeedAuthGuard implements CanActivate {

  token: string;

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if(sessionStorage.usuarioLogado == null){
      this.router.navigate(['']);
      return false;
    }else{
      return true;
    }

  }
}
