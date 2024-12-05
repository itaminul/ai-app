import { Controller, Post, Body } from '@nestjs/common';
import { ChatService } from './chat.service';

class ChatRequestDto {
  message: string;
}

@Controller('chat')
export class ChatController {
  constructor(private chatService: ChatService) {}

  @Post()
  async chat(
    @Body() chatRequest: ChatRequestDto,
  ): Promise<{ response: string }> {
    const response = await this.chatService.chat(chatRequest.message);
    return { response };
  }
}
