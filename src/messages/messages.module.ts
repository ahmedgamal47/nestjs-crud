import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Message, MessageSchema } from 'src/schemas/message.schema';
import { MessagesController } from './messages.controller';
import { MessagesRepository } from './messages.repository';
import { MessagesService } from './messages.service';

@Module({
  imports: [MongooseModule.forFeature([{name: Message.name, schema: MessageSchema}])],
  controllers: [MessagesController],
  providers: [MessagesService, MessagesRepository]
})
export class MessagesModule {}
