import { Body, Controller, Get, Inject, Injectable, Param, Post, Put } from '@nestjs/common';
import { ContatoService, Coordenadas } from './contato.service';
import { Contato } from './domain/contato';
import { BlackList } from './domain/blackList';

@Injectable()
@Controller('contato')
export class ContatoController{
  constructor(
    @Inject()
    private contatoService : ContatoService
  ){}

  @Post('/novo')
  async criarContato(@Body()contato : Contato){
    return await this.contatoService.criarContato(contato)
  }

  @Post('enviarMensagem/:id')
  async sendSms(@Param('id')id: string){
    return await this.contatoService.enviarLink(id)
  }

  @Put('/atualizarCordenadas/:id')
  async atualizarCordenadas(@Param('id') id: string,@Body()body:{longitude: number, latitude:number}){
    const {longitude, latitude} = body
    const cordenadas:Coordenadas={
      latitude:latitude,
      longitude:longitude
    }
    return await this.contatoService.atualizarCordenadas(id, cordenadas)

  }
  @Get('/todos')
  async findAll(){
    return await this.contatoService.findAll()
  }
  @Get('/buscarNaBlackList')
  async buscarNaBlackList(@Param('telefone') telefone:string){
    return await this.contatoService.buscarTrotes(telefone)
  }
  @Post('/inserirNaBlackList')
  async inserirNaBlackList(@Body()dados:BlackList){
    return await this.contatoService.inserirBlackList(dados)
  }

}