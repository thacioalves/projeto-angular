import { Produto } from "./produto";
import { Usuario } from "./usuario";

export class Reclame{
    id!: number;
    idUsuario!: Usuario;
    idProduto!: Produto;
    reclamacao!: string;
  
}
