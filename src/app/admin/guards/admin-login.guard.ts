import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

export const adminLoginGuard: CanActivateFn = (route, state) => {
  const service = inject(AdminService)
  const router = inject(Router)

  if(service.isAdminLogedIn)
    return true

  return router.createUrlTree(['admin/login'])

};
