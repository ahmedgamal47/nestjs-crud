import { Injectable, NotFoundException } from "@nestjs/common";
import { Message, MessageDocument } from "src/schemas/message.schema";
import { MessagesRepository } from "./messages.repository";

@Injectable()
export class MessagesService{
    constructor(public messagesRepo: MessagesRepository){}

    findOne(id: string){
        return this.messagesRepo.findOne(id);
    }

    async findOrFail(id: string){
        const message = await this.messagesRepo.findOne(id);
        if(!message){
            throw new NotFoundException('Message not found');
        }
        
        return message;
    }

    findAll(){
        return this.messagesRepo.findAll();
    }

    create(content: string){
        return this.messagesRepo.create(content);
    }

    update(id: string, content: string){
        return this.messagesRepo.update(id, content);
    }

    delete(id: string){
        return this.messagesRepo.delete(id);
    }
}