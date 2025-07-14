import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Orders } from './pages/orders/orders';
import { Reports } from './pages/reports/reports';
import { Clients } from './pages/clients/clients';
import { Register } from './pages/register/register';
import { Login} from './pages/login/login';
import { Logout } from './pages/logout/logout';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'login', component: Login},
  { path: 'dashboard', component: Dashboard },
  { path: 'orders', component: Orders },
  { path: 'reports', component: Reports },
  { path: 'clients', component: Clients },
  { path: 'register', component: Register },
  { path: 'logout', component: Logout},
  { path: '**', redirectTo: 'login' }
];