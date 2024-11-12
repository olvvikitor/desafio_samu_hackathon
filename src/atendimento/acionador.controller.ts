import { Body, Controller, Get, Inject, Injectable, Param, Post, Put } from '@nestjs/common';
import { Atendimento } from './domain/atendimento';
import { AtendimentoService } from './atendimento.service';


@Injectable()
@Controller('acionador')
export class AcionadorController{
constructor(
  @Inject()
  private atendimentoService: AtendimentoService
){}
  @Get('/:id')
  async buscarDados(@Param('id')id:string){
    return await this.atendimentoService.findContatoByIdAtendimento(id)
  }
  @Post('/enviarDados/:id')
  async enviarDadosParaMotorista(@Param('id')id:string){
    const dados = await this.atendimentoService.findContatoByIdAtendimento(id)
     await this.atendimentoService.enviarDados(dados)
  }
}