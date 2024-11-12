import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Contato } from './domain/contato';
import { ContatoRepository } from './infra/contato.repository';
import { TwilioService } from 'nestjs-twilio';
import { ConfigService } from '@nestjs/config';
import { BlackListRepository } from './infra/backlist.repository';
import { BlackList } from './domain/blackList';

export interface Coordenadas {
  latitude: number,
  longitude: number
}

@Injectable()
export class ContatoService {
  constructor(
    @Inject()
    private contatoRepository: ContatoRepository,
    @Inject()
    private twilloService: TwilioService,
    @Inject()
    private configService: ConfigService,
    @Inject()
    private blackListRepository: BlackListRepository

  ) { }
  async criarContato(contato: Contato): Promise<void> {
    return await this.contatoRepository.create(contato)
  }
  async enviarLink(id: string) {
    return this.twilloService.client.messages.create({
      body: `http://localhost:3000/contato/atualizarCordenadas/${id}`,
      from: this.configService.get('TWILIO_PHONE_NUMBER'),
      to: this.configService.get('MY_NUMBER') as string
    })
  }
  async atualizarCordenadas(id: string, cordenadas: Coordenadas): Promise<void> {
    const contato = await this.contatoRepository.findById(id)
    if (!contato) {
      throw new NotFoundException
    }
    contato.endereco.latitude = cordenadas.latitude
    contato.endereco.longitude = cordenadas.longitude
    await this.contatoRepository.update(id, contato)
  }
  async findAll(): Promise<Contato[]> {
    return await this.contatoRepository.findAll()
  }
  async inserirBlackList(dados:BlackList): Promise<void>{
    const exists = await this.blackListRepository.findByTelefone(dados.telefone)
    if(exists){
      exists.quantidade + 1
      await this.blackListRepository.update(exists._id,exists)
    }
     await this.blackListRepository.create(dados)
  }
  async buscarTrotes(telefone: string): Promise<BlackList | undefined> {
    const estaNaBlackList = await this.blackListRepository.findByTelefone(telefone)
    if (estaNaBlackList) {
      return estaNaBlackList
    }
  }
}