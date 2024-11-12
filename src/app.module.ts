import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoConfigConnection } from './config/mongodb/connection';
import { ContatoModule } from './contato/contato.module';
import { AtendimentoModule } from './atendimento/atendimento.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MongooseModule.forRootAsync({
      useClass: MongoConfigConnection
    }),
    ContatoModule,
    AtendimentoModule
  ],
})
export class AppModule {}
