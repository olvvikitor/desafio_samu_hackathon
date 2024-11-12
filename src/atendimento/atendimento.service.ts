import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Atendimento } from './domain/atendimento';
import { AtendimentoRepository } from './infra/atendimento.repository';
import { InjectModel } from '@nestjs/mongoose';
import { Endereco } from 'src/contato/domain/contato';
import { ContatoRepository } from 'src/contato/infra/contato.repository';
import { TwilioService } from 'nestjs-twilio';
import { ConfigService } from '@nestjs/config';

export interface IResponse{
  etiqueta: string
  nome: string
  telefone: string,
  status: string
  situacao: string
  endereco: Endereco,
  link: string
}

@Injectable()
export class AtendimentoService{
  constructor(
    @Inject()
    private atendiemntoRepository:AtendimentoRepository,
    @Inject()
    private contatoRepository: ContatoRepository,
    @Inject()
    private twilloService: TwilioService,
    @Inject()
    private configService: ConfigService,
  ){}
  async create(id:string,atendimento:Atendimento):Promise<void>{
    atendimento.id_contato = id
    await this.atendiemntoRepository.create(atendimento)
  }
  async findAll():Promise<Atendimento[]>{
    return await this.atendiemntoRepository.findAll()
  }
  async update(id: string, status: string){
    const atendimento = await this.atendiemntoRepository.findById(id)
    if(!atendimento){
      throw new NotFoundException
    }
    atendimento.status = status
    return await this.atendiemntoRepository.updateStatus(id, atendimento)
  }

  async findContatoByIdAtendimento(id:any):Promise<IResponse>{
    const atendimento = await this.atendiemntoRepository.findById(id)
    if(!atendimento){
      throw new NotFoundException

    }
    const contato = await this.contatoRepository.findById(atendimento.id_contato)
    if(!contato){
      throw new NotFoundException
    }
    const response:IResponse = {
      endereco: contato.endereco,
      etiqueta: atendimento.etiqueta,
      nome: contato.nome,
      telefone: contato.telefone,
      status: atendimento.status,
      situacao: contato.situacao,
      link: `https://www.google.com.br/maps/?q=${contato.endereco.latitude},${contato.endereco.longitude}`
    }
    return response
  }
  async enviarDados(dados: IResponse):Promise<void>{

    const mensagem = `Nome: ${dados.nome}
    Telefone: ${dados.telefone}
    Status: ${dados.status}
    Situação: ${dados.situacao}
    Etiqueta: ${dados.etiqueta}
    Endereço: ${dados.endereco.rua}, ${dados.endereco.numero}, Bairro: ${dados.endereco.bairro}
    Link para localização: ${dados.link}`;

    await this.twilloService.client.messages.create({
      body: mensagem,
      from: this.configService.get('TWILIO_PHONE_NUMBER'),
      to: this.configService.get('MY_NUMBER') as string
    })
  }
}