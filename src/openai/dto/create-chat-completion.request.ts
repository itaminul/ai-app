import { IsEnum, IsString } from 'class-validator';

export enum ChatCompletionRole {
  SYSTEM = 'system',
  USER = 'user',
  ASSISTANT = 'assistant',
}

export class ChatCompletionMessageDto {
  messages(messages: any) {
    throw new Error('Method not implemented.');
  }
  @IsEnum(ChatCompletionRole)
  role: ChatCompletionRole;

  @IsString()
  content: string;
}
