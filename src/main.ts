import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { authPaths, authRoutes } from './app/modules/auth/shared/auth-routes';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter([
      {
        path: '',
        redirectTo: authRoutes.logIn,
        pathMatch: 'full',
      },
      {
        path: authPaths.base,
        loadChildren: () => import('./app/modules/auth/auth.routrs').then(mod => mod.AUTH_ROUTES),
      },
    ])]
})
  .catch((err) => console.error(err));
