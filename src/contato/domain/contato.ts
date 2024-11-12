
export class Endereco{
  bairro: string
  rua:string
  numero:string
  ponto_referencia: string
  latitude:number
  longitude:number
}
export class Contato{
  id : any
  nome:string
  telefone:string
  endereco: Endereco
  situacao:string
}