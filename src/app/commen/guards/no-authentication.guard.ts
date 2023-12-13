import { CanActivateFn } from '@angular/router';

export const noAuthenticationGuard: CanActivateFn = (route, state) => {
  return true;
};
