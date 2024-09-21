import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('jwt');
  if (token) {
    return true
  } else {
    inject(Router).navigate(['/login'])
    alert('未登入')
    return false;
  }
};
