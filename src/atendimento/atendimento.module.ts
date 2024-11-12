import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AtendimentoModel } from './infra/atendimento';
import { AtendimentoController } from './atendimento.controller';
import { AtendimentoService } from './atendimento.service';
import { AtendimentoRepository } from './infra/atendimento.repository';
import { AcionadorController } from './acionador.controller';
import { ContatoModule } from 'src/contato/contato.module';
import { TwilioModule } from 'nestjs-twilio';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports:
  [
    MongooseModule.forFeature([{
      name: 'Atendimento', schema: AtendimentoModel
    }]),
    ContatoModule,
    TwilioModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (cfg: ConfigService) => ({
        accountSid: cfg.get('TWILIO_ACCOUNT_SID'),
        authToken: cfg.get('TWILIO_AUTH_TOKEN'),
      }),
      inject: [ConfigService],
    }),

  ],

  controllers:[AtendimentoController, AcionadorController],
  providers:[AtendimentoService, AtendimentoRepository],
  exports:[AtendimentoRepository, AtendimentoService]

})
export class AtendimentoModule{}