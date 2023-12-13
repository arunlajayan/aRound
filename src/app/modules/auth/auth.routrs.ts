import { Route } from '@angular/router';
import { authPaths } from './shared/auth-routes';
import { LogInComponent } from './component/log-in/log-in.component';
import { RegisterComponent } from './component/register/register.component';
import { LogOutComponent } from './component/log-out/log-out.component';
import { noAuthenticationGuard } from '../../commen/guards/no-authentication.guard';

export const AUTH_ROUTES: Route[] = [
  { path: authPaths.logIn, component: LogInComponent, canActivate: [noAuthenticationGuard] },
  {
    path: authPaths.register,
    component: RegisterComponent,
    canActivate: [noAuthenticationGuard],
  },
  {
    path: authPaths.logout,
    component: LogOutComponent,
  },
  
];