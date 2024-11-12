import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BlackList } from '../domain/blackList';

@Schema()
class BlackListSchema implements BlackList{
  @Prop({type:String})
  telefone: string;
  @Prop({type:Number})
  quantidade: number;
}
export const BlackListModel = SchemaFactory.createForClass(BlackListSchema)