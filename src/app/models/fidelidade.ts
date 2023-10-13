import { Desconto } from "./desconto";
import { Usuario } from "./usuario";

export class Fidelidade{
    id!: number;
    idUsuario!: Usuario;
    idDesconto!: Desconto;
  
}
