import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { Atendimento } from '../domain/atendimento';

@Injectable()
export class AtendimentoRepository{
  constructor(
    @InjectModel('Atendimento')
    private model:Model<Atendimento>
  ){}
  async create(dados: Atendimento):Promise<void>{
    const newBlackList = await this.model.create(dados)
    newBlackList.save()
    
  }
  async findAll():Promise<Atendimento[]>{
    return await this.model.find({status: 'aberto'})
  }
  async updateStatus(id:any, atendimento:Atendimento):Promise<void>{
    await this.model.updateOne({_id: id}, atendimento)
  }
  async findById(id:string):Promise<Atendimento | null>{
    return await this.model.findOne({_id:id})
  }

}