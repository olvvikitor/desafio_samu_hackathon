import { Module } from '@nestjs/common';
import { ContatoRepository } from './infra/contato.repository';
import { ContatoController } from './contato.controller';
import { ContatoService } from './contato.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ContatoModel } from './infra/contato.schema';
import { TwilioModule } from 'nestjs-twilio';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BlackListModel } from './infra/backListSchema';
import { BlackListRepository } from './infra/backlist.repository';

@Module({
  imports:[
    MongooseModule.forFeature([{
      name:'Contato', schema: ContatoModel
    }]),
    MongooseModule.forFeature([{
      name:'BlackList', schema: BlackListModel
    }]),
    TwilioModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (cfg: ConfigService) => ({
        accountSid: cfg.get('TWILIO_ACCOUNT_SID'),
        authToken: cfg.get('TWILIO_AUTH_TOKEN'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers:[
    ContatoController
  ],
  providers:[
    ContatoRepository,
    ContatoService,
    BlackListRepository
  ],
  exports:[
    ContatoRepository,
    BlackListRepository,
    

  ]
})
export class ContatoModule{}