import { Injectable, InternalServerErrorException } from '@nestjs/common';
import OpenAI from 'openai';
import { ChatCompletionMessageDto } from './dto/create-chat-completion.request';

@Injectable()
export class OpenaiService {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async createChatCompletion(messages: ChatCompletionMessageDto[]) {
    try {
      const chatCompletion = await this.openai.chat.completions.create({
        model: 'gpt-4',
        messages: messages,
      });

      return chatCompletion;
    } catch (error) {
      console.error('Error creating chat completion:', error);
      throw new InternalServerErrorException(
        `OpenAI API Error: ${error.message}`,
      );
    }
  }
}
