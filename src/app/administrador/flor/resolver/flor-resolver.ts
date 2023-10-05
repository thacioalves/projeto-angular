import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Flor } from 'src/app/models/flor';
import { FlorService } from 'src/app/services/flor.service';

export const florResolver: ResolveFn<Flor> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(FlorService).findById(route.paramMap.get('id')!);
};
