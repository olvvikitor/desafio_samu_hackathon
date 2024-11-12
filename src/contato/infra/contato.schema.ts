import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Contato } from '../domain/contato';
import { Endereco } from 'src/endereco/domain/endereco';

@Schema()
class ContatoSchema implements Omit<Contato, 'id'> {
  @Prop({type: String, required: true})
  telefone: string;
  @Prop({type: String, required: true})
  nome: string;
  @Prop({type: Object, required: true})
  endereco: Endereco;
  @Prop({type: String, required: true})
  situacao: string
}
export const ContatoModel = SchemaFactory.createForClass(ContatoSchema)