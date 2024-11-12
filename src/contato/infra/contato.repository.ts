import { Model } from 'mongoose';
import { Contato } from '../domain/contato';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ContatoRepository {
  constructor(
    @InjectModel('Contato')
    private model:Model<Contato>
  ){}
  async create(contato: Contato):Promise<void>{
    const novoContato = await this.model.create(contato)
    await novoContato.save()
  }
  async update(id:any,contato: Contato):Promise<void>{
    await this.model.updateOne({_id:id}, contato)
  }
  async findById(id: any):Promise<Contato|null>{
    return await this.model.findOne({_id:id})
  }
  async findAll():Promise<Contato[]>{
    return await this.model.find()
  }
  
}