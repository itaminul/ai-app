import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';
import { ChatCompletionMessageDto } from './dto/chat-completion-message.dto';

@Injectable()
export class OpenAIService {
  private openai: OpenAI;

  constructor(private configService: ConfigService) {
    this.openai = new OpenAI({
      apiKey: this.configService.get<string>('OPENAI_API_KEY'),
    });
  }

  async createChatCompletion(messages: ChatCompletionMessageDto[]) {
    try {
      const chatCompletion = await this.openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: messages,
      });

      return chatCompletion.choices[0].message;
    } catch (error) {
      console.error('Error creating chat completion:', error);
      throw new InternalServerErrorException(
        `OpenAI API Error: ${error.message}`,
      );
    }
  }
}
