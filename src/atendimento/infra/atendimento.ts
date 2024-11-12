import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Atendimento } from '../domain/atendimento';
import { Types } from 'mongoose';

@Schema()
export class SchemaAtendimento implements Atendimento{
  @Prop({type: Types.ObjectId, ref: 'Contato', required: true})
  id_contato: any;
  @Prop({type:String, default:'aberto'})
  status: string;
  @Prop({type:String})
  etiqueta: string;
}
export const AtendimentoModel = SchemaFactory.createForClass(SchemaAtendimento)