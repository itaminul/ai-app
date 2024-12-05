import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ChatController } from './chat.controller';
import { OpenAIService } from './openai.service';
import { ChatService } from './chat.service';

@Module({
  imports: [ConfigModule],
  controllers: [ChatController],
  providers: [ChatService, OpenAIService],
})
export class ChatModule {}
