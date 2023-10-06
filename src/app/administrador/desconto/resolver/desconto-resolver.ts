import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Desconto } from 'src/app/models/desconto';
import { DescontoService } from 'src/app/services/desconto.service';

export const descontoResolver: ResolveFn<Desconto> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(DescontoService).findById(route.paramMap.get('id')!);
};
