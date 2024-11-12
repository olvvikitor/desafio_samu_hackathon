import { InjectModel } from '@nestjs/mongoose';
import { BlackList } from '../domain/blackList';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BlackListRepository{
  constructor(
    @InjectModel('BlackList')
    private model:Model<BlackList>
  ){}
  async create(dados: BlackList):Promise<void>{
    const newBlackList = await this.model.create(dados)
    newBlackList.save()
    
  }
  async findByTelefone(telefone:string):Promise<any>{
    const blackList = await this.model.findOne({telefone:telefone})
    return blackList
  }
  async update(id:any,dados:BlackList):Promise<void>{
    await this.model.updateOne({_id:id}, dados)
  }
}