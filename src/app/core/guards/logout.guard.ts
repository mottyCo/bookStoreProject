import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CorrectUserService } from '../services/currect-user.service';


export const logoutGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const logedUser = inject(CorrectUserService)
  if(logedUser.user != null)
    return true;
  return router.createUrlTree(['login'])
};
