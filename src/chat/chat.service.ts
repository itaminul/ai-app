import { Injectable } from '@nestjs/common';

import {
  ChatCompletionMessageDto,
  ChatCompletionRole,
} from './dto/chat-completion-message.dto';
import { OpenAIService } from './openai.service';

@Injectable()
export class ChatService {
  constructor(private openAIService: OpenAIService) {}

  async chat(userMessage: string): Promise<string> {
    const messages: ChatCompletionMessageDto[] = [
      {
        role: ChatCompletionRole.SYSTEM,
        content: 'You are a helpful assistant.',
      },
      { role: ChatCompletionRole.USER, content: userMessage },
    ];

    const response = await this.openAIService.createChatCompletion(messages);
    return response.content;
  }
}
