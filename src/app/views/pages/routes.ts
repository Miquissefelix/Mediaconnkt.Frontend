import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '404',
    loadComponent: () => import('./page404/page404.component').then(m => m.Page404Component),
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    loadComponent: () => import('./page500/page500.component').then(m => m.Page500Component),
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent),
    data: {
      title: 'Login Page'
    }
  },

  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.component').then(m => m.ProfileComponent),
    data: {
      title: 'Profile Page'
    }
  },
  {
    path: 'portfolio',
    loadComponent: () => import('./portfolio/portfolio.component').then(m => m.PortfolioComponent),
    data: {
      title: 'Portfolio'
    }
  },
  {
    path: 'reports',
    loadComponent: () => import('./reports/reports.component').then(m => m.ReportsComponent),
    data: {
      title: 'reports Page'
    }
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.component').then(m => m.RegisterComponent),
    data: {
      title: 'Register Page'
    }
  }
];
