import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://message_service:d3PhXqvsiWKE5uBL@cluster0.cc47x.mongodb.net/messagesDatabase?retryWrites=true&w=majority'),
    MessagesModule,
  ],
})
export class AppModule {}