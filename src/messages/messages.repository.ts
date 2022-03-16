import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Message, MessageDocument } from "src/schemas/message.schema";

@Injectable()
export class MessagesRepository {
    constructor(@InjectModel(Message.name) private messageModel: Model<MessageDocument>){}

    async findOne(id: string) {
        const message = await this.messageModel.findById(id).exec();

        return message;
    }

    async findAll() {
        return this.messageModel.find().exec();
    }

    async create(content: string) {
        const newMessage = new this.messageModel({
            content: content
        });
        return await newMessage.save();
    }

    async update(id: string, content: string) {
        const message = await this.messageModel.findById(id).exec();
        if(!message){
            throw new NotFoundException('Message not found');
        }
        message.content = content;
        return await message.save();
    }

    async delete(id: string){
        return await this.messageModel.findByIdAndDelete(id);
    }
}