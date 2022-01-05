import { IsString } from 'class-validator';

export class JsonChatMessageDto {
  
  date: string;
  mention: string;
  sentence: string;
  type: string;

}
