import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Estoque } from 'src/app/models/estoque';
import { EstoqueService } from 'src/app/services/estoque.service';

export const estoqueResolver: ResolveFn<Estoque> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(EstoqueService).findById(route.paramMap.get('id')!);
};
