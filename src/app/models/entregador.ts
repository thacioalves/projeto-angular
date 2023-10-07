import { Produto } from "./produto";

export class Entregador{
    id!: number;
    nomeEntregador!: string;
    CNPJ!: number;
    chaveRastreio!: string;
    idProduto!: Produto;
  
}
