import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from './interfaces/item.interface';
import { Model } from 'mongoose';
import { CreateItemDto } from './dto/create-item.dto';

@Injectable()
export class ItemsService {
    constructor (@InjectModel('Item') private readonly itemModel:Model<Item>){}

    async findAll(): Promise<Item[]> {
        return await this.itemModel.find();
    }

    async findOne(id: string): Promise<Item> {
        return await this.itemModel.findOne({_id: id});
    }

    async create(createItemDto: CreateItemDto): Promise<Item> {
        const createdItem = new this.itemModel(createItemDto);
        return await createdItem.save(createdItem);
    }
    
}
