
// src/app/app.config.ts
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
  
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { Login } from './pages/login/login';
import { Reports } from './pages/reports/reports';
import { Dashboard } from './pages/dashboard/dashboard';
import { Register } from './pages/register/register'; 
import { Logout } from './pages/logout/logout';
import { Myapprovals } from './pages/myapprovals/myapprovals';

const routes: Routes = [
  { path: 'login', component: Login },
  { path: '', redirectTo: 'login', pathMatch: 'full' },  // optional redirect
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'report', component: Reports },
      { path: 'dashboard', component: Dashboard },
      { path: 'register', component: Register },
      { path: 'logout', component: Logout},
      { path: 'myapprovals', component: Myapprovals}
    ]
  },
  { path: '**', redirectTo: 'login' } // catch-all
];

export const appConfig: ApplicationConfig = {
  providers: [
        provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient(),
    provideRouter(routes)
  ]
};
 
// import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
// import { provideRouter } from '@angular/router';

// import { routes } from './app.routes';
// import { provideHttpClient } from '@angular/common/http';

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideBrowserGlobalErrorListeners(),
//     provideZonelessChangeDetection(),
//     provideHttpClient(),
//     provideRouter(routes)
//   ]
// };
