import { IsEnum, IsString } from 'class-validator';

export enum ChatCompletionRole {
  SYSTEM = 'system',
  USER = 'user',
  ASSISTANT = 'assistant',
}

export class ChatCompletionMessageDto {
  @IsEnum(ChatCompletionRole)
  role: ChatCompletionRole;

  @IsString()
  content: string;
}
