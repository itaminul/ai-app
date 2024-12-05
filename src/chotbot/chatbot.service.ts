import { Injectable } from '@nestjs/common';

import { ChatCompletionMessageParam } from 'openai/resources/chat';
import { OpenAIService } from './openai.service';

@Injectable()
export class ChatbotService {
  constructor(private openAIService: OpenAIService) {}

  async chat(message: string): Promise<string> {
    const messages: ChatCompletionMessageParam[] = [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: message },
    ];

    const response = await this.openAIService.createChatCompletion(messages);
    return response.content;
  }
}
