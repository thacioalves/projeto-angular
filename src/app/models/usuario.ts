import { Perfil } from "./perfil";
import { Sexo } from "./sexo";

export class Usuario {
  id!: number;
  nome!: string;
  cpf!: string;
  sexo!: Sexo;
  telefone!: string;
  endereco!: string;
  perfis!: Perfil;
  login!: string;
  senha!: string;
}
