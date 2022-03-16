import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    constructor(public messagesService: MessagesService) {}

    @Get()
    listMessages() {
        return this.messagesService.findAll();
    }

    @Post()
    createMessage(@Body() body: CreateMessageDto) {
        return this.messagesService.create(body.content);
    }

    @Get('/:id')
    getMessage(@Param('id') id: string) {
        return this.messagesService.findOrFail(id);
    }

    @Patch('/:id')
    updateMessage(@Param('id') id: string, @Body() body: CreateMessageDto){
        return this.messagesService.update(id, body.content);
    }

    @ApiRes
    @Delete('/:id')
    deleteMessage(@Param('id') id: string){
        return this.messagesService.delete(id);
    }
}
