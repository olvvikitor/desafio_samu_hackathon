import { Body, Controller, Get, Inject, Injectable, Param, Post, Put } from '@nestjs/common';
import { Atendimento } from './domain/atendimento';
import { AtendimentoService } from './atendimento.service';


@Injectable()
@Controller('atendimento')
export class AtendimentoController{
constructor(
  @Inject()
  private atendimentoService: AtendimentoService
){}
  // Ajustar para receber apenas a etiqueta no corpo
  @Post('/:id')
  async criarAtendimento(@Param('id') id: string,@Body() body:{ etiqueta: string}) {
    const { etiqueta } = body; // Desestruturando o body para pegar a etiqueta como string
    const atendimento : Atendimento={
      etiqueta: etiqueta,
      id_contato: id,
    } as Atendimento
    return await this.atendimentoService.create(id, atendimento);  // Passando a etiqueta diretamente
  }
  @Get()
  async buscarTodos(){
    return await this.atendimentoService.findAll()
  }
  @Put('/:id')
  async updateStatus(@Param('id') id:string, @Body() status: string){
    return await this.atendimentoService.update(id, status)
  }
}