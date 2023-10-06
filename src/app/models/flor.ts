import { Fornecedor } from "./fornecedor";
import { Produto } from "./produto";
import { TipoFlor } from "./tipoflor";

export class Flor{
  id!: number;
  corPetalas!: string;
  alturaCaule!: number;
  fornecedor!: Fornecedor;
  produto!: Produto;
  tipoflor!: TipoFlor;
}
